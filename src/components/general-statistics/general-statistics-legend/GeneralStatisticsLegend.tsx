import styles from "./GeneralStatisticsLegend.module.scss";
import type { IDataset } from "../../line-chart/helpers/createDataset.ts";
import { TOTAL, TRANSACTION_TYPES } from "../../../constants.ts";
import type { TTotal, TTransaction } from "../../../types.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

const TRANSACTION_TITLES: Record<TTransaction | TTotal, string> = {
  [TRANSACTION_TYPES.EXPANSES]: "Выручка",
  [TRANSACTION_TYPES.INCOME]: "Затраты",
  [TRANSACTION_TYPES.REVENUE]: "Прибыль",
  [TRANSACTION_TYPES.DEBT]: "Задолженность",
  [TOTAL]: "Итог",
} as const;

const IMPORTANT_TRANSACTION_TYPES: Record<TTransaction | TTotal, boolean> = {
  [TRANSACTION_TYPES.EXPANSES]: false,
  [TRANSACTION_TYPES.INCOME]: true,
  [TRANSACTION_TYPES.REVENUE]: true,
  [TRANSACTION_TYPES.DEBT]: false,
  [TOTAL]: false,
} as const;

interface IGeneralStatisticsLegendLabelProps {
  datasets: IDataset<TTransaction | TTotal>[];
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
            {IMPORTANT_TRANSACTION_TYPES[label] && (
              <FontAwesomeIcon icon={faExclamation} />
            )}
          </div>
          <div>
            <div className={styles.title}>
              {TRANSACTION_TITLES[label as TTransaction]}
            </div>
            <div className={styles.value}>
              ₽{" "}
              {data
                .reduce((acc, amount) => acc + amount, 0)
                .toLocaleString("fr-FR")}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
