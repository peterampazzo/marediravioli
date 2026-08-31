// @vitest-environment node

import { describe, expect, it } from "vitest";
import {
  isValidTallyEmbedUrl,
  validateProductionConfig,
} from "./validate-production-config.mjs";

const openBatch = {
  id: "2099-09-12-spinach",
  pickupAt: "2099-09-12T12:00:00+02:00",
  timezone: "Europe/Copenhagen",
  filling: "Ricotta & spinach",
  location: "Copenhagen",
  status: "open",
};

describe("production configuration", () => {
  it("allows a closed batch without a form", () => {
    expect(
      validateProductionConfig({
        batch: { ...openBatch, status: "closed" },
        tallyFormUrl: undefined,
      }),
    ).toEqual([]);
  });

  it("allows a complete future batch with a Tally embed", () => {
    expect(
      validateProductionConfig({
        batch: openBatch,
        tallyFormUrl: "https://tally.so/embed/example",
        now: new Date("2099-09-01T00:00:00Z"),
      }),
    ).toEqual([]);
  });

  it("rejects incomplete, expired, and unconfigured open batches", () => {
    const errors = validateProductionConfig({
      batch: { ...openBatch, id: "next-community-batch", filling: null },
      tallyFormUrl: "https://example.com/embed/example",
      now: new Date("2100-01-01T00:00:00Z"),
    });

    expect(errors).toHaveLength(4);
  });

  it("accepts only HTTPS Tally embed URLs", () => {
    expect(isValidTallyEmbedUrl("https://tally.so/embed/example")).toBe(true);
    expect(isValidTallyEmbedUrl("http://tally.so/embed/example")).toBe(false);
    expect(isValidTallyEmbedUrl("https://tally.so/r/example")).toBe(false);
    expect(isValidTallyEmbedUrl("https://tally.so/embed/YOUR_FORM_ID")).toBe(
      false,
    );
    expect(isValidTallyEmbedUrl("https://example.com/embed/example")).toBe(
      false,
    );
  });
});
