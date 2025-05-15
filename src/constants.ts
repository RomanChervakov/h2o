export const TRANSACTION_TYPES = {
  EXPANSES: "expanses",
  INCOME: "income",
  REVENUE: "revenue",
  DEBT: "debt",
} as const;

export const DIVISIONS = {
  B2B: "B2B",
  B2C: "B2C",
} as const;

export const CHART_TABS = {
  MONTH: "Месяц",
  YEAR: "Год",
} as const;

export const CHART_COLORS = {
  [TRANSACTION_TYPES.EXPANSES]: "#73CF7A",
  [TRANSACTION_TYPES.INCOME]: "#30C7DC",
  [TRANSACTION_TYPES.REVENUE]: "#45AAF2",
  [TRANSACTION_TYPES.DEBT]: "#F5E230",
} as const;

export const YEAR = 2024;

export const MONTHS_IN_YEAR = 12;
