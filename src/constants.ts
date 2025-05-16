import type { TDivision, TTotal, TTransaction } from "./types.ts";

export const TRANSACTION_TYPES = {
  EXPANSES: "expanses",
  INCOME: "income",
  REVENUE: "revenue",
  DEBT: "debt",
} as const;

export const TOTAL = "total" as const;

export const DIVISIONS = {
  B2B: "B2B",
  B2C: "B2C",
  ALL: "all",
} as const;

export const CHART_TABS = {
  MONTH: "Месяц",
  YEAR: "Год",
} as const;

export const YEAR = 2024;

export const MONTHS_IN_YEAR = 12;

export const CHART_COLORS: Record<TTransaction | TTotal, string> = {
  [TRANSACTION_TYPES.EXPANSES]: "#73CF7A",
  [TRANSACTION_TYPES.INCOME]: "#30C7DC",
  [TRANSACTION_TYPES.REVENUE]: "#45AAF2",
  [TRANSACTION_TYPES.DEBT]: "#F5E230",
  [TOTAL]: "#AC74FC",
} as const;

export const CHART_TITLES: Record<TDivision, string> = {
  [DIVISIONS.B2B]: "Статистика B2B",
  [DIVISIONS.B2C]: "Статистика B2С",
  [DIVISIONS.ALL]: "Общая статистика",
} as const;
