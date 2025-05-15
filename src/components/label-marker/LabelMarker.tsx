import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import styles from "./LabelMarker.module.scss";

interface ILabelMarkerProps {
  label: string;
  value: number;
  isImportant?: boolean;
  color: string;
}

export default function LabelMarker({
  label,
  value,
  color,
  isImportant,
}: ILabelMarkerProps) {
  return (
    <div className={styles.label}>
      <div className={styles.marker} style={{ backgroundColor: color }}>
        {isImportant && <FontAwesomeIcon icon={faExclamation} />}
      </div>
      <div>
        <div className={styles.title}>{label}</div>
        <div className={styles.value}>₽ {value.toLocaleString("fr-FR")}</div>
      </div>
    </div>
  );
}
