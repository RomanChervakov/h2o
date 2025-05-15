import styles from "./ProblemZones.module.scss";
import LabelMarker from "../label-marker/LabelMarker.tsx";
import getRandomNumberInRange from "../../helpers/getRandomNumberInRange.ts";

const problemZones = [
  "Линейный персонал",
  "Подразделение разовых работ ФОТ",
  "Бензин (наличные)",
  "Закупка инвентаря",
  "Закупка спецодежды/СИЗ",
  "Ремонт оборудования",
  "Обслуживание автомобиля",
  "Форс-мажоры",
  "Рекламные бюджеты (Блогеры)",
  "Рекламные бюджеты (Контекст)",
];

const CRITICAL_VALUE = 50000;

export default function ProblemZones() {
  return (
    <div className={styles.card}>
      <h2 className={styles.heading}>Проблемные зоны</h2>
      {problemZones.map((problemZone) => {
        const randomValue = getRandomNumberInRange(10000, 1000000);

        return (
          <LabelMarker
            label={problemZone}
            value={randomValue}
            color={randomValue < CRITICAL_VALUE ? "#F7B731" : "#FC5C65"}
            isImportant
          />
        );
      })}
    </div>
  );
}
