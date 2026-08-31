import type { BatchConfig, EffectiveBatchStatus } from "@/types/batch";
import batchConfig from "@/config/batch.config.json";

export const BATCH = batchConfig as BatchConfig;

export function getEffectiveBatchStatus(
  batch: BatchConfig,
  now = new Date(),
): EffectiveBatchStatus {
  if (batch.status !== "open") {
    return batch.status;
  }

  if (!batch.pickupAt || !batch.filling?.trim() || !batch.location.trim()) {
    return "closed";
  }

  const pickupTime = Date.parse(batch.pickupAt);

  if (!Number.isFinite(pickupTime) || pickupTime <= now.getTime()) {
    return "expired";
  }

  return "open";
}

export function formatPickupDate(batch: BatchConfig): string {
  if (!batch.pickupAt) {
    return "Date to be announced";
  }

  const pickupDate = new Date(batch.pickupAt);

  if (Number.isNaN(pickupDate.getTime())) {
    return "Date to be announced";
  }

  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: batch.timezone,
  }).format(pickupDate);
}
