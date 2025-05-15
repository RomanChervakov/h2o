import styles from "./GeneralStatisticsLegend.module.scss";
import type { IDataset } from "../../line-chart/helpers/createDataset.ts";
import { TRANSACTION_TYPES } from "../../../constants.ts";
import type { TTransaction } from "../../../types.ts";

const TRANSACTION_TITLES: Record<TTransaction, string> = {
  [TRANSACTION_TYPES.EXPANSES]: "Выручка",
  [TRANSACTION_TYPES.INCOME]: "Затраты",
  [TRANSACTION_TYPES.REVENUE]: "Прибыль",
  [TRANSACTION_TYPES.DEBT]: "Задолженность",
} as const;

const IMPORTANT_TRANSACTION_TYPES: Record<TTransaction, boolean> = {
  [TRANSACTION_TYPES.EXPANSES]: false,
  [TRANSACTION_TYPES.INCOME]: true,
  [TRANSACTION_TYPES.REVENUE]: true,
  [TRANSACTION_TYPES.DEBT]: false,
} as const;

interface IGeneralStatisticsLegendLabelProps {
  datasets: IDataset<TTransaction>[];
}

export default function GeneralStatisticsLegend({
  datasets,
}: IGeneralStatisticsLegendLabelProps) {
  return (
    <div className={styles.legendContainer}>
      {datasets.map(({ label, borderColor, data }) => (
        <div className={styles.legendLabel}>
          <div
            className={styles.marker}
            style={{ backgroundColor: borderColor }}
          >
            {IMPORTANT_TRANSACTION_TYPES[label] && "!"}
          </div>
          <div>
            <div className={styles.title}>
              {TRANSACTION_TITLES[label as TTransaction]}
            </div>
            <div className={styles.value}>
              ₽{" "}
              {Math.trunc(
                data.reduce((acc, amount) => acc + amount, 0) / data.length,
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
