import impactConfig from "@/config/impact.config.json";

export interface ImpactConfig {
  asOf: string;
  ravioliMade: number;
  donatedDkk: number;
  donatedEur: number;
  turtlesProtected: number;
  turtlesPeriod: string;
}

export const IMPACT = impactConfig as ImpactConfig;

export const PARTNER = {
  name: "Marine Conservation Philippines",
  shortName: "MCP",
  instagram: "https://www.instagram.com/marineconservationphilippines/",
} as const;

export function formatCount(value: number): string {
  return new Intl.NumberFormat("en-GB").format(value);
}
