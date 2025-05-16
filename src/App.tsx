import Layout from "./components/layout/Layout.tsx";
import GeneralStatistics from "./components/general-statistics/GeneralStatistics.tsx";
import ReportCard from "./components/report-card/ReportCard.tsx";
import styles from "./App.module.scss";
import getRandomArrayItem from "./helpers/getRandomArrayItem.ts";
import getRandomDateInYear from "./helpers/getRandomDateInYear.ts";
import getRandomNumberInRange from "./helpers/getRandomNumberInRange.ts";
import { DIVISIONS, TRANSACTION_TYPES, YEAR } from "./constants.ts";
import type { IDataItem, TDivision } from "./types.ts";
import { useState } from "react";
import ProblemZones from "./components/problem-zones/ProblemZones.tsx";

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

const randomDataGrouped: Record<TDivision, IDataItem[]> = {
  [DIVISIONS.B2B]: randomData.filter(
    ({ division }) => division === DIVISIONS.B2B,
  ),
  [DIVISIONS.B2C]: randomData.filter(
    ({ division }) => division === DIVISIONS.B2C,
  ),
  [DIVISIONS.ALL]: randomData,
};

const randomPercentageB2B = getRandomNumberInRange(0, 100);
const randomPercentageB2C = getRandomNumberInRange(0, 100);
const randomPercentageTotal = getRandomNumberInRange(0, 100);

const totalB2B = randomDataGrouped[DIVISIONS.B2B].reduce(
  (acc, { amount }) => acc + amount,
  0,
);
const totalB2C = randomDataGrouped[DIVISIONS.B2C].reduce(
  (acc, { amount }) => acc + amount,
  0,
);

export default function App() {
  const [division, setDivision] = useState<TDivision>(DIVISIONS.ALL);

  return (
    <Layout>
      <div>
        <h1 className={styles.heading}>Сводный отчет</h1>
        <div className={styles.cards}>
          <div className={styles.report}>
            <div className={styles.reportCards}>
              <ReportCard
                title="Итоги"
                percentage={randomPercentageTotal}
                amount={totalB2B + totalB2C}
                active={division === DIVISIONS.ALL}
                onClick={() => {
                  setDivision(DIVISIONS.ALL);
                }}
              />
              <ReportCard
                title={DIVISIONS.B2B}
                amount={totalB2B}
                percentage={randomPercentageB2B}
                active={division === DIVISIONS.B2B}
                onClick={() => {
                  setDivision(DIVISIONS.B2B);
                }}
              />
              <ReportCard
                title={DIVISIONS.B2C}
                amount={totalB2C}
                percentage={randomPercentageB2C}
                active={division === DIVISIONS.B2C}
                onClick={() => {
                  setDivision(DIVISIONS.B2C);
                }}
              />
            </div>
            <GeneralStatistics data={randomDataGrouped} division={division} />
          </div>
          <ProblemZones />
        </div>
      </div>
    </Layout>
  );
}
