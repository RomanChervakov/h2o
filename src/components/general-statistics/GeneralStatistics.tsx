import styles from "./GeneralStatistics.module.scss";
import LineChart from "../line-chart/LineChart.tsx";
import createDataset from "../line-chart/helpers/createDataset.ts";
import { useCallback, useState } from "react";
import GeneralStatisticsTabs from "./general-statistics-tabs/GeneralStatisticsTabs.tsx";
import type {
  IDataItem,
  TChartTabs,
  TTransaction,
  TUnit,
} from "../../types.ts";
import {
  CHART_TABS,
  MONTHS_IN_YEAR,
  TRANSACTION_TYPES,
  YEAR,
} from "../../constants.ts";
import getYearlyReport from "./helpers/getYearlyReport.ts";
import {
  getDaysInMonth,
  getMonthlyReport,
} from "./helpers/getMonthlyReport.ts";
import GeneralStatisticsLegend from "./general-statistics-legend-label/GeneralStatisticsLegend.tsx";

const CHART_COLORS: Record<TTransaction, string> = {
  [TRANSACTION_TYPES.EXPANSES]: "#73CF7A",
  [TRANSACTION_TYPES.INCOME]: "#30C7DC",
  [TRANSACTION_TYPES.REVENUE]: "#45AAF2",
  [TRANSACTION_TYPES.DEBT]: "#F5E230",
} as const;

const UNIT_BY_TAB: Record<TChartTabs, TUnit> = {
  [CHART_TABS.YEAR]: "month",
  [CHART_TABS.MONTH]: "day",
};

const MONTH_INDEX = 0;

interface IGeneralStatisticsProps {
  data: IDataItem[];
}

export default function GeneralStatistics({ data }: IGeneralStatisticsProps) {
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
      datasets: Object.values(TRANSACTION_TYPES).map((type) =>
        createDataset(type, getYearlyReport(data, type), CHART_COLORS[type]),
      ),
    },
    [CHART_TABS.MONTH]: {
      labels: Array.from(
        { length: getDaysInMonth(YEAR, MONTH_INDEX) },
        (_, date) => new Date(YEAR, MONTH_INDEX, date + 1),
      ),
      datasets: Object.values(TRANSACTION_TYPES).map((type) =>
        createDataset(
          type,
          getMonthlyReport(data, type, YEAR, MONTH_INDEX),
          CHART_COLORS[type],
        ),
      ),
    },
  };

  return (
    <div className={styles.card}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Общая статистика</h2>
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
