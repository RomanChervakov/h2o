import type { IDataItem, TTransaction } from "../../../types.ts";
import { MONTHS_IN_YEAR } from "../../../constants.ts";

export default function getYearlyReport(
  data: IDataItem[],
  type?: TTransaction | string,
) {
  return Array.from({ length: MONTHS_IN_YEAR }, (_, month) => {
    return data
      .filter(
        (item) =>
          (type ? item.type === type : true) && item.date.getMonth() === month,
      )
      .reduce((sum, item) => sum + item.amount, 0);
  });
}
