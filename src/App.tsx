import Layout from "./components/layout/Layout.tsx";
import GeneralStatistics from "./components/general-statistics/GeneralStatistics.tsx";
import ReportCard from "./components/report-card/ReportCard.tsx";
import styles from "./App.module.scss";
import getRandomArrayItem from "./helpers/getRandomArrayItem.ts";
import getRandomDateInYear from "./helpers/getRandomDateInYear.ts";
import getRandomNumberInRange from "./helpers/getRandomNumberInRange.ts";
import { DIVISIONS, TOTAL, TRANSACTION_TYPES, YEAR } from "./constants.ts";
import type { IDataItem, TDivision, TTotal } from "./types.ts";
import { useState } from "react";

const randomData = Array.from(
  { length: 30000 },
  (): IDataItem => ({
    division: getRandomArrayItem(Object.values(DIVISIONS)),
    date: getRandomDateInYear(YEAR),
    amount: getRandomNumberInRange(-200000, 200000),
    type: getRandomArrayItem(Object.values(TRANSACTION_TYPES)),
  }),
).sort(
  (item1, item2) =>
    new Date(item1.date).getTime() - new Date(item2.date).getTime(),
);

const randomDataGrouped: Record<TDivision | TTotal, IDataItem[]> = {
  [DIVISIONS.B2B]: randomData.filter(
    ({ division }) => division === DIVISIONS.B2B,
  ),
  [DIVISIONS.B2C]: randomData.filter(
    ({ division }) => division === DIVISIONS.B2C,
  ),
  [TOTAL]: randomData,
};

const randomPercentageB2B = getRandomNumberInRange(-100, 100);
const randomPercentageB2C = getRandomNumberInRange(-100, 100);
const randomPercentageTotal = getRandomNumberInRange(-100, 100);

const totalB2B = randomDataGrouped[DIVISIONS.B2B].reduce(
  (acc, { amount }) => acc + amount,
  0,
);
const totalB2C = randomDataGrouped[DIVISIONS.B2C].reduce(
  (acc, { amount }) => acc + amount,
  0,
);

export default function App() {
  const [division, setDivision] = useState<TDivision>(DIVISIONS.B2B);

  return (
    <Layout>
      <div className={styles.report}>
        <h1 className={styles.heading}>Сводный отчет</h1>
        <div className={styles.reportCards}>
          <ReportCard
            title="Итоги"
            percentage={randomPercentageTotal}
            amount={totalB2B + totalB2C}
            isTotal
          />
          <button
            onClick={() => {
              setDivision(DIVISIONS.B2B);
            }}
          >
            <ReportCard
              title={DIVISIONS.B2B}
              amount={totalB2B}
              percentage={randomPercentageB2B}
            />
          </button>
          <button
            onClick={() => {
              setDivision(DIVISIONS.B2C);
            }}
          >
            <ReportCard
              title={DIVISIONS.B2C}
              amount={totalB2C}
              percentage={randomPercentageB2C}
            />
          </button>
        </div>
        <GeneralStatistics data={randomDataGrouped} division={division} />
      </div>
    </Layout>
  );
}
