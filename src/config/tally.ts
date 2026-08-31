import { formatPickupDate } from "@/config/batch";
import type { BatchConfig } from "@/types/batch";

export function buildTallyEmbedUrl(
  batch: BatchConfig,
  tallyFormUrl?: string,
): string | null {
  if (!tallyFormUrl) return null;

  try {
    const url = new URL(tallyFormUrl);

    const isTallyHost =
      url.hostname === "tally.so" || url.hostname.endsWith(".tally.so");
    const formId = url.pathname.slice("/embed/".length).split("/")[0];

    if (
      url.protocol !== "https:" ||
      !isTallyHost ||
      !url.pathname.startsWith("/embed/") ||
      !formId ||
      formId === "YOUR_FORM_ID" ||
      url.username ||
      url.password
    ) {
      return null;
    }

    url.searchParams.set("alignLeft", "1");
    url.searchParams.set("hideTitle", "1");
    url.searchParams.set("transparentBackground", "1");
    url.searchParams.set("batchId", batch.id);
    url.searchParams.set("pickupAt", batch.pickupAt ?? "");
    url.searchParams.set("pickupDate", formatPickupDate(batch));
    url.searchParams.set("timezone", batch.timezone);
    url.searchParams.set("filling", batch.filling ?? "");
    url.searchParams.set("location", batch.location);

    return url.toString();
  } catch {
    return null;
  }
}
