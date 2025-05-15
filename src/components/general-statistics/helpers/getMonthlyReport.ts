import type { IDataItem, TTransaction } from "../../../types.ts";

export function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

export function getMonthlyReport(
  data: IDataItem[],
  year: number,
  month: number,
  type?: TTransaction | string,
) {
  return Array.from({ length: getDaysInMonth(year, month) }, (_, date) => {
    return data
      .filter(
        (item) =>
          (type ? item.type === type : true) &&
          item.date.getMonth() === month &&
          item.date.getDate() === date + 1,
      )
      .reduce((sum, item) => sum + item.amount, 0);
  });
}
