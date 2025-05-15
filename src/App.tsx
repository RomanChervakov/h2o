import Layout from "./components/layout/Layout.tsx";
import GeneralStatistics from "./components/general-statistics/GeneralStatistics.tsx";
import ReportCard from "./components/report-card/ReportCard.tsx";
import styles from "./App.module.scss";
import getRandomArrayItem from "./helpers/getRandomArrayItem.ts";
import getRandomDateInYear from "./helpers/getRandomDateInYear.ts";
import getRandomNumberInRange from "./helpers/getRandomNumberInRange.ts";
import { DIVISIONS, TRANSACTION_TYPES, YEAR } from "./constants.ts";
import type { IDataItem } from "./types.ts";
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

const randomDataB2B = randomData.filter(
  ({ division }) => division === DIVISIONS.B2B,
);
const randomDataB2C = randomData.filter(
  ({ division }) => division === DIVISIONS.B2C,
);

const randomPercentageB2B = getRandomNumberInRange(-100, 100);
const randomPercentageB2C = getRandomNumberInRange(-100, 100);
const randomPercentageTotal = getRandomNumberInRange(-100, 100);

const totalB2B = randomDataB2B.reduce((acc, { amount }) => acc + amount, 0);
const totalB2C = randomDataB2C.reduce((acc, { amount }) => acc + amount, 0);

export default function App() {
  const [data, setData] = useState(randomDataB2B);

  return (
    <Layout>
      <div className={styles.report}>
        <div className={styles.reportCards}>
          <ReportCard
            title="Итоги"
            percentage={randomPercentageTotal}
            amount={totalB2B + totalB2C}
          />
          <ReportCard
            title={DIVISIONS.B2B}
            amount={totalB2B}
            percentage={randomPercentageB2B}
            onClick={() => setData(randomDataB2B)}
          />
          <ReportCard
            title={DIVISIONS.B2C}
            amount={totalB2C}
            percentage={randomPercentageB2C}
            onClick={() => setData(randomDataB2C)}
          />
        </div>
        <GeneralStatistics currentData={data} totalData={randomData} />
      </div>
    </Layout>
  );
}
