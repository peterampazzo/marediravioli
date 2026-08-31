import type { BatchConfig } from "@/types/batch";

export const BATCH_PREVIEW_MODES = [
  "live",
  "open",
  "sold-out",
  "closed",
  "expired",
  "missing-form",
] as const;

export type BatchPreviewMode = (typeof BATCH_PREVIEW_MODES)[number];

export function isBatchPreviewMode(
  value: string | null,
): value is BatchPreviewMode {
  return BATCH_PREVIEW_MODES.some((mode) => mode === value);
}

export function getPreviewBatch(
  batch: BatchConfig,
  mode: BatchPreviewMode,
): BatchConfig {
  if (mode === "live") return batch;

  const completePreviewBatch: BatchConfig = {
    ...batch,
    id: `preview-${mode}`,
    pickupAt: "2099-09-12T12:00:00+02:00",
    filling: batch.filling?.trim() || "Ricotta & spinach",
    location: batch.location.trim() || "Copenhagen",
    status:
      mode === "sold-out" ? "sold-out" : mode === "closed" ? "closed" : "open",
  };

  if (mode === "expired") {
    return {
      ...completePreviewBatch,
      pickupAt: "2020-09-12T12:00:00+02:00",
      status: "open",
    };
  }

  return completePreviewBatch;
}
