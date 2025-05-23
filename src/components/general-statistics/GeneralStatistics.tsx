import styles from "./GeneralStatistics.module.scss";
import LineChart from "../line-chart/LineChart.tsx";
import createDataset from "../line-chart/helpers/createDataset.ts";
import { useCallback, useState } from "react";
import GeneralStatisticsTabs from "./general-statistics-tabs/GeneralStatisticsTabs.tsx";
import type { IDataItem, TChartTabs, TDivision, TUnit } from "../../types.ts";
import {
  CHART_COLORS,
  CHART_TABS,
  CHART_TITLES,
  DIVISIONS,
  MONTHS_IN_YEAR,
  TOTAL,
  TRANSACTION_TYPES,
  YEAR,
} from "../../constants.ts";
import getYearlyReport from "./helpers/getYearlyReport.ts";
import {
  getDaysInMonth,
  getMonthlyReport,
} from "./helpers/getMonthlyReport.ts";
import GeneralStatisticsLegend from "./general-statistics-legend/GeneralStatisticsLegend.tsx";

const UNIT_BY_TAB: Record<TChartTabs, TUnit> = {
  [CHART_TABS.YEAR]: "month",
  [CHART_TABS.MONTH]: "day",
};

const MONTH_INDEX = 0;

interface IGeneralStatisticsProps {
  data: Record<TDivision, IDataItem[]>;
  division: TDivision;
}

export default function GeneralStatistics({
  data,
  division,
}: IGeneralStatisticsProps) {
  const [activeTab, setActiveTab] = useState<TChartTabs>(CHART_TABS.YEAR);

  const handleTabClick = useCallback((tab: TChartTabs) => {
    setActiveTab(tab);
  }, []);

  const dataByTab = {
    [CHART_TABS.YEAR]: {
      labels: Array.from(
        { length: MONTHS_IN_YEAR },
        (_, month) => new Date(YEAR, month),
      ),
      datasets: [
        ...Object.values(TRANSACTION_TYPES).map((type) =>
          createDataset(
            type,
            getYearlyReport(data[division], type),
            CHART_COLORS[type],
          ),
        ),
        createDataset(
          TOTAL,
          getYearlyReport(data[DIVISIONS.ALL]),
          CHART_COLORS[TOTAL],
        ),
      ],
    },
    [CHART_TABS.MONTH]: {
      labels: Array.from(
        { length: getDaysInMonth(YEAR, MONTH_INDEX) },
        (_, date) => new Date(YEAR, MONTH_INDEX, date + 1),
      ),
      datasets: [
        ...Object.values(TRANSACTION_TYPES).map((type) =>
          createDataset(
            type,
            getMonthlyReport(data[division], YEAR, MONTH_INDEX, type),
            CHART_COLORS[type],
          ),
        ),
        createDataset(
          TOTAL,
          getMonthlyReport(data[DIVISIONS.ALL], YEAR, MONTH_INDEX),
          CHART_COLORS[TOTAL],
        ),
      ],
    },
  };

  return (
    <div className={styles.card}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>{CHART_TITLES[division]}</h2>
        <GeneralStatisticsTabs
          activeTab={activeTab}
          handleTabClick={handleTabClick}
        />
      </div>
      <LineChart data={dataByTab[activeTab]} unit={UNIT_BY_TAB[activeTab]} />
      <GeneralStatisticsLegend datasets={dataByTab[activeTab].datasets} />
    </div>
  );
}
