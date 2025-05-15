import styles from "./GeneralStatistics.module.scss";
import GeneralStatisticsLegendLabel from "./general-statistics-legend-label/GeneralStatisticsLegendLabel.tsx";
import LineChart from "../line-chart/LineChart.tsx";
import createDataset, {
  type IDataset,
} from "../line-chart/helpers/createDataset.ts";
import generalStatisticsData from "../../assets/data.json";
import { useCallback, useState } from "react";
import GeneralStatisticsTabs from "./general-statistics-tabs/GeneralStatisticsTabs.tsx";
import { randomDataB2C } from "./helpers/randomData.ts";

const TABS = {
  WEEK: "Неделя",
  MONTH: "Месяц",
  YEAR: "Год",
};

export default function GeneralStatistics() {
  const [data, setData] = useState(randomDataB2C);
  const dataByTab = {
    [TABS.YEAR]: {
      labels: randomDataB2C.map(({ date }) => date),
      datasets: [
        createDataset(
          "income",
          randomDataB2C.map(({ amount }) => amount),
          "#73CF7A",
        ),
      ],
    },
  };
  const [dataByPeriod, setDataByPeriod] = useState(dataByTab[TABS.YEAR]);
  const onTabClick = useCallback((data) => {
    setDataByPeriod(data);
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Общая статистика</h2>
        <GeneralStatisticsTabs
          dataByTab={dataByTab}
          defaultTab={TABS.YEAR}
          handleTabClick={onTabClick}
        />
      </div>
      <LineChart data={dataByPeriod} unit="day" />
      <div className={styles.legendContainer}>
        {dataByPeriod.datasets.map(
          ({ borderColor, label, data }: IDataset, index) => (
            <GeneralStatisticsLegendLabel
              backgroundColor={borderColor}
              title={label}
              value={Math.trunc(
                data.reduce((acc, val) => acc + val, 0) / data.length,
              )}
              isImportant={generalStatisticsData[index].important}
            />
          ),
        )}
      </div>
    </div>
  );
}
