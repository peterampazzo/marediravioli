export type BatchStatus = "draft" | "open" | "sold-out" | "closed";

export interface BatchConfig {
  id: string;
  pickupAt: string | null;
  timezone: "Europe/Copenhagen";
  filling: string | null;
  location: string;
  status: BatchStatus;
  pricePerPortionDkk?: number | null;
  portionServes?: number;
}

export type EffectiveBatchStatus = BatchStatus | "expired";
