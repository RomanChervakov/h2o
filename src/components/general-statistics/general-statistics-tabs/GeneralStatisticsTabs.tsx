import styles from "./GeneralStatisticsTabs.module.scss";
import clsx from "clsx";
import type { TChartTabs } from "../../../types.ts";
import { CHART_TABS } from "../../../constants.ts";
// import { useState } from "react";

interface IGeneralStatisticsTabProps {
  activeTab: TChartTabs;
  handleTabClick: (tab: TChartTabs) => void;
}

export default function GeneralStatisticsTabs({
  activeTab,
  handleTabClick,
}: IGeneralStatisticsTabProps) {
  return (
    <div className={styles.periods}>
      {Object.values(CHART_TABS).map((tab: TChartTabs) => (
        <button
          key={tab}
          className={clsx(
            styles.periodButton,
            activeTab === tab && styles.active,
          )}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
