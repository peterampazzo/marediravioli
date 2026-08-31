import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";
import { loadEnv } from "vite";

const VALID_STATUSES = new Set(["draft", "open", "sold-out", "closed"]);

export function isValidTallyEmbedUrl(value) {
  if (!value) return false;

  try {
    const url = new URL(value);
    const isTallyHost =
      url.hostname === "tally.so" || url.hostname.endsWith(".tally.so");
    const formId = url.pathname.slice("/embed/".length).split("/")[0];

    return (
      url.protocol === "https:" &&
      isTallyHost &&
      url.pathname.startsWith("/embed/") &&
      Boolean(formId) &&
      formId !== "YOUR_FORM_ID" &&
      !url.username &&
      !url.password
    );
  } catch {
    return false;
  }
}

export function validateProductionConfig({
  batch,
  tallyFormUrl,
  now = new Date(),
}) {
  const errors = [];

  if (!batch || typeof batch !== "object") {
    return ["Batch configuration must be a JSON object."];
  }

  if (!VALID_STATUSES.has(batch.status)) {
    errors.push("Batch status must be draft, open, sold-out, or closed.");
  }

  if (batch.timezone !== "Europe/Copenhagen") {
    errors.push('Batch timezone must be "Europe/Copenhagen".');
  }

  if (typeof batch.location !== "string" || !batch.location.trim()) {
    errors.push("Batch location is required.");
  }

  if (batch.pickupAt !== null) {
    const pickupTime = Date.parse(batch.pickupAt);
    if (!Number.isFinite(pickupTime)) {
      errors.push("pickupAt must be null or a valid ISO 8601 timestamp.");
    }
  }

  if (batch.status === "open") {
    const pickupTime = Date.parse(batch.pickupAt ?? "");

    if (!batch.id || batch.id === "next-community-batch") {
      errors.push("An open batch needs a unique, non-placeholder id.");
    }

    if (!Number.isFinite(pickupTime) || pickupTime <= now.getTime()) {
      errors.push("An open batch needs a valid future pickupAt timestamp.");
    }

    if (typeof batch.filling !== "string" || !batch.filling.trim()) {
      errors.push("An open batch needs a filling.");
    }

    if (!isValidTallyEmbedUrl(tallyFormUrl)) {
      errors.push(
        "An open batch needs VITE_TALLY_FORM_URL set to an HTTPS tally.so/embed/... URL.",
      );
    }
  }

  return errors;
}

async function run() {
  const batchUrl = new URL("../src/config/batch.config.json", import.meta.url);
  const batch = JSON.parse(await readFile(batchUrl, "utf8"));
  const mode = process.argv[2] || "production";
  const env = loadEnv(mode, process.cwd(), "");
  const errors = validateProductionConfig({
    batch,
    tallyFormUrl: env.VITE_TALLY_FORM_URL?.trim(),
  });

  if (errors.length > 0) {
    console.error("Production configuration is invalid:");
    for (const error of errors) console.error(`- ${error}`);
    process.exitCode = 1;
  }
}

const invokedUrl = process.argv[1]
  ? pathToFileURL(resolve(process.argv[1])).href
  : null;

if (invokedUrl === import.meta.url) {
  await run();
}
