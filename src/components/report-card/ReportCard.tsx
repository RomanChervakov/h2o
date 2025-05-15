import styles from "./ReportCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function ReportCard() {
  return (
    <div className={styles.card}>
      <span className={styles.pill}>
        <FontAwesomeIcon icon={faArrowUp} />
        43.7 %
      </span>
      <span className={styles.amount}>₽ 8615253</span>
      <span className={styles.division}>B2C</span>
    </div>
  );
}
