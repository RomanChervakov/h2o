import styles from "./ReportCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

interface IReportCardProps {
  title: string;
  percentage: number;
  amount: number;
  onClick?: () => void;
  isTotal?: boolean;
}

export default function ReportCard({
  title,
  percentage,
  amount,
  onClick,
}: IReportCardProps) {
  return (
    <button className={styles.card} onClick={onClick}>
      <span
        className={clsx(
          styles.pill,
          percentage >= 0 ? styles.pillSuccess : styles.pillDanger,
        )}
      >
        <FontAwesomeIcon icon={percentage >= 0 ? faArrowUp : faArrowDown} />
        {percentage} %
      </span>
      <span className={styles.amount}>₽ {amount?.toLocaleString("fr-FR")}</span>
      <span className={styles.division}>{title}</span>
    </button>
  );
}
