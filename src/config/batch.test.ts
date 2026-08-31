import { describe, expect, it } from "vitest";
import { formatPickupDate, getEffectiveBatchStatus } from "@/config/batch";
import { getPreviewBatch } from "@/config/preview";
import type { BatchConfig } from "@/types/batch";

const openBatch: BatchConfig = {
  id: "2099-09-12-spinach",
  pickupAt: "2099-09-12T12:00:00+02:00",
  timezone: "Europe/Copenhagen",
  filling: "Ricotta & spinach",
  location: "Copenhagen",
  status: "open",
};

describe("batch configuration", () => {
  it("keeps a complete future batch open", () => {
    expect(
      getEffectiveBatchStatus(openBatch, new Date("2099-09-01T00:00:00Z")),
    ).toBe("open");
  });

  it("closes an expired batch even when it is still marked open", () => {
    expect(
      getEffectiveBatchStatus(openBatch, new Date("2099-09-13T00:00:00Z")),
    ).toBe("expired");
  });

  it("closes an incomplete batch", () => {
    expect(getEffectiveBatchStatus({ ...openBatch, filling: null })).toBe(
      "closed",
    );
    expect(getEffectiveBatchStatus({ ...openBatch, pickupAt: null })).toBe(
      "closed",
    );
  });

  it("preserves explicit sold-out and closed states", () => {
    expect(getEffectiveBatchStatus({ ...openBatch, status: "sold-out" })).toBe(
      "sold-out",
    );
    expect(getEffectiveBatchStatus({ ...openBatch, status: "closed" })).toBe(
      "closed",
    );
  });

  it("formats the pickup date in the configured Copenhagen timezone", () => {
    expect(formatPickupDate(openBatch)).toBe("Saturday 12 September");
  });

  it("provides selectable development states without changing the live batch", () => {
    expect(
      getEffectiveBatchStatus(getPreviewBatch(openBatch, "sold-out")),
    ).toBe("sold-out");
    expect(getEffectiveBatchStatus(getPreviewBatch(openBatch, "closed"))).toBe(
      "closed",
    );
    expect(getEffectiveBatchStatus(getPreviewBatch(openBatch, "expired"))).toBe(
      "expired",
    );
    expect(
      getEffectiveBatchStatus(getPreviewBatch(openBatch, "missing-form")),
    ).toBe("open");
    expect(getPreviewBatch(openBatch, "live")).toBe(openBatch);
  });
});
