import styles from "./GeneralStatisticsTabs.module.scss";
import clsx from "clsx";
import { useState } from "react";
import type { IGeneralStatisticsChartData } from "../helpers/generateRandomData.ts";

interface IGeneralStatisticsTabProps {
  dataByTab: Record<string, IGeneralStatisticsChartData>;
  defaultTab: string;
  handleTabClick: (data: IGeneralStatisticsChartData) => void;
}

export default function GeneralStatisticsTabs({
  dataByTab,
  defaultTab,
  handleTabClick,
}: IGeneralStatisticsTabProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className={styles.periods}>
      {Object.keys(dataByTab).map((tab) => (
        <button
          className={clsx(
            styles.periodButton,
            activeTab === tab && styles.active,
          )}
          onClick={() => {
            handleTabClick(dataByTab[tab]);
            setActiveTab(tab);
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
