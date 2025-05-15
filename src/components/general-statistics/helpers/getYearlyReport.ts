import type { IDataItem, TTransaction } from "../../../types.ts";
import { MONTHS_IN_YEAR } from "../../../constants.ts";

export default function getYearlyReport(data: IDataItem[], type: TTransaction) {
  const filteredData = data.filter((item) => item.type === type);

  return Array.from({ length: MONTHS_IN_YEAR }, (_, month) => {
    return filteredData
      .filter((item) => item.date.getMonth() === month)
      .reduce((sum, item) => sum + item.amount, 0);
  });
}
