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
    amount: getRandomNumberInRange(-500000, 500000),
    type: getRandomArrayItem(Object.values(TRANSACTION_TYPES)),
  }),
).sort(
  (item1, item2) =>
    new Date(item1.date).getTime() - new Date(item2.date).getTime(),
);

export default function App() {
  const [data, setData] = useState(
    randomData.filter(({ division }) => division === DIVISIONS.B2B),
  );

  return (
    <Layout>
      <div className={styles.report}>
        <div className={styles.reportCards}>
          <ReportCard title="Итоги" />
          <ReportCard
            title={DIVISIONS.B2B}
            onClick={() =>
              setData(
                randomData.filter(({ division }) => division === DIVISIONS.B2B),
              )
            }
          />
          <ReportCard
            title={DIVISIONS.B2C}
            onClick={() =>
              setData(
                randomData.filter(({ division }) => division === DIVISIONS.B2C),
              )
            }
          />
        </div>
        <GeneralStatistics data={data} />
      </div>
    </Layout>
  );
}
