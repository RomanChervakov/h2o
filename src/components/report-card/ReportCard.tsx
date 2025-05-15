import styles from "./ReportCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

interface IReportCardProps {
  title: string;
  percentage: number;
  amount: number;
  isTotal?: boolean;
}

export default function ReportCard({
  title,
  percentage,
  amount,
  isTotal,
}: IReportCardProps) {
  return (
    <div
      className={clsx(
        styles.card,
        isTotal
          ? percentage >= 0
            ? styles.success
            : styles.danger
          : percentage >= 0
            ? styles.buttonSuccess
            : styles.buttonDanger,
      )}
    >
      <span
        className={clsx(
          styles.pill,
          isTotal
            ? styles.total
            : percentage >= 0
              ? styles.success
              : styles.danger,
        )}
      >
        <FontAwesomeIcon icon={percentage >= 0 ? faArrowUp : faArrowDown} />
        {percentage} %
      </span>
      <span className={styles.amount}>₽ {amount?.toLocaleString("fr-FR")}</span>
      <span className={styles.division}>{title}</span>
    </div>
  );
}
