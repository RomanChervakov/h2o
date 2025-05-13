import styles from "./GeneralStatisticsLegendLabel.module.scss";

interface IGeneralStatisticsLegendLabelProps {
  title: string;
  value: number;
  isImportant?: boolean;
  backgroundColor: string;
}

export default function GeneralStatisticsLegendLabel({
  isImportant,
  title,
  value,
  backgroundColor,
}: IGeneralStatisticsLegendLabelProps) {
  return (
    <div className={styles.legendLabel}>
      <div className={styles.marker} style={{ backgroundColor }}>
        {isImportant && "!"}
      </div>
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.value}>₽ {value}</div>
      </div>
    </div>
  );
}
