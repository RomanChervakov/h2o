import { CHART_TABS, DIVISIONS, type TRANSACTION_TYPES } from "./constants.ts";

export type TDivision = (typeof DIVISIONS)[keyof typeof DIVISIONS];

export type TTransaction =
  (typeof TRANSACTION_TYPES)[keyof typeof TRANSACTION_TYPES];

export type TTotal = "total";

export type TChartTabs = (typeof CHART_TABS)[keyof typeof CHART_TABS];

export interface IDataItem {
  division: TDivision;
  date: Date;
  amount: number;
  type: TTransaction;
}

export type TUnit =
  | false
  | "month"
  | "millisecond"
  | "second"
  | "minute"
  | "hour"
  | "day"
  | "week"
  | "quarter"
  | "year"
  | undefined;
