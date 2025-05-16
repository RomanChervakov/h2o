import styles from "./ReportCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

interface IReportCardProps {
  title: string;
  percentage: number;
  amount: number;
  onClick: () => void;
  active: boolean;
}

export default function ReportCard({
  title,
  percentage,
  amount,
  onClick,
  active,
}: IReportCardProps) {
  const signedPercentage = amount >= 0 ? percentage : -percentage;

  return (
    <button
      className={clsx(
        styles.card,
        signedPercentage >= 0 ? styles.success : styles.danger,
        active &&
          (signedPercentage >= 0 ? styles.successActive : styles.dangerActive),
      )}
      onClick={onClick}
    >
      <span
        className={clsx(
          styles.pill,
          signedPercentage >= 0 ? styles.success : styles.danger,
        )}
      >
        <FontAwesomeIcon
          icon={signedPercentage >= 0 ? faArrowUp : faArrowDown}
        />
        {signedPercentage} %
      </span>
      <span className={styles.amount}>₽ {amount?.toLocaleString("fr-FR")}</span>
      <span className={styles.division}>{title}</span>
    </button>
  );
}
