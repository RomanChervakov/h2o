import type { IDataItem, TTransaction } from "../../../types.ts";

export function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

export function getMonthlyReport(
  data: IDataItem[],
  type: TTransaction,
  year: number,
  month: number,
) {
  return Array.from({ length: getDaysInMonth(year, month) }, (_, date) => {
    return data
      .filter(
        (item) =>
          item.type === type &&
          item.date.getMonth() === month &&
          item.date.getDate() === date + 1,
      )
      .reduce((sum, item) => sum + item.amount, 0);
  });
}
