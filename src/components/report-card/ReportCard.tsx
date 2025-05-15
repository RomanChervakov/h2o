import styles from "./ReportCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

interface IReportCardProps {
  title: string;
  onClick?: () => void;
}

export default function ReportCard({ title, onClick }: IReportCardProps) {
  return (
    <div className={styles.card}>
      <button className={styles.pill} onClick={onClick}>
        <FontAwesomeIcon icon={faArrowUp} />
        43.7 %
      </button>
      <span className={styles.amount}>₽ 8615253</span>
      <span className={styles.division}>{title}</span>
    </div>
  );
}
