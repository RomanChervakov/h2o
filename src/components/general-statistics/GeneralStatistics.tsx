import { Line } from "react-chartjs-2";
import styles from "./GeneralStatistics.module.scss";
import {
  Chart,
  type ChartOptions,
  type ScriptableTooltipContext,
  type TooltipItem,
} from "chart.js/auto";
import {
  CategoryScale,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import GeneralStatisticsLegendLabel from "./general-statistics-legend-label/GeneralStatisticsLegendLabel.tsx";
import generateRandomArray from "../../generateRandomArray.ts";

Chart.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineController,
  Tooltip,
  Legend,
);

const labels = [
  "Янв",
  "Фев",
  "Мар",
  "Апр",
  "Май",
  "Июн",
  "Июл",
  "Авг",
  "Сен",
  "Окт",
  "Ноя",
  "Дек",
];

const MIN_AVERAGE = -10000;
const MAX_AVERAGE = 30000;
const LENGTH = 365;
const MIN_SUM = -5000000;
const MAX_SUM = 10000000;

const data = {
  labels: labels,
  datasets: [
    {
      label: "Cubic interpolation",
      data: generateRandomArray(
        MIN_AVERAGE,
        MAX_AVERAGE,
        LENGTH,
        MIN_SUM,
        MAX_SUM,
      ),
      borderColor: "#A060FC",
      borderWidth: 3,
      fill: false,
      tension: 0.4,
      pointRadius: 0,
      pointHoverRadius: 8,
      pointHoverBorderWidth: 3,
      pointHoverBackgroundColor: "#FFFFFF",
    },
    {
      label: "Linear interpolation (default)",
      data: generateRandomArray(
        MIN_AVERAGE,
        MAX_AVERAGE,
        LENGTH,
        MIN_SUM,
        MAX_SUM,
      ),
      borderColor: "#45AAF2",
      borderWidth: 3,
      fill: false,
      tension: 0.4,
      pointRadius: 0,
      pointHoverRadius: 8,
      pointHoverBorderWidth: 3,
      pointHoverBackgroundColor: "#FFFFFF",
    },
    {
      label: "Linear interpolation (default)",
      data: generateRandomArray(
        MIN_AVERAGE,
        MAX_AVERAGE,
        LENGTH,
        MIN_SUM,
        MAX_SUM,
      ),
      borderColor: "#30C7DC",
      borderWidth: 3,
      fill: false,
      tension: 0.4,
      pointRadius: 0,
      pointHoverRadius: 8,
      pointHoverBorderWidth: 3,
      pointHoverBackgroundColor: "#FFFFFF",
    },
    {
      label: "Linear interpolation (default)",
      data: generateRandomArray(
        MIN_AVERAGE,
        MAX_AVERAGE,
        LENGTH,
        MIN_SUM,
        MAX_SUM,
      ),
      borderColor: "#F5E230",
      borderWidth: 3,
      fill: false,
      tension: 0.4,
      pointRadius: 0,
      pointHoverRadius: 8,
      pointHoverBorderWidth: 3,
      pointHoverBackgroundColor: "#FFFFFF",
    },
    {
      label: "Linear interpolation (default)",
      data: generateRandomArray(
        MIN_AVERAGE,
        MAX_AVERAGE,
        LENGTH,
        MIN_SUM,
        MAX_SUM,
      ),
      borderColor: "#73CF7A",
      borderWidth: 3,
      fill: false,
      tension: 0.4,
      pointRadius: 0,
      pointHoverRadius: 8,
      pointHoverBorderWidth: 3,
      pointHoverBackgroundColor: "#FFFFFF",
    },
  ],
};

const options: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
    tooltip: {
      xAlign: "center",
      yAlign: "bottom",
      borderColor: (tooltipContext: ScriptableTooltipContext<"line">) =>
        tooltipContext.chart.tooltip?.labelColors[0].borderColor,
      backgroundColor: "#F8F8F8",
      borderWidth: 1,
      bodyColor: "#323F47",
      bodyFont: {
        family: "Proxima Nova",
        size: 18,
        weight: 600,
      },
      callbacks: {
        label: (tooltipItem: TooltipItem<"line">) => `₽ ${tooltipItem.raw}`,
        title: () => "",
      },
      displayColors: false,
    },
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
      },
      border: {
        display: true,
        color: "#F8F8F8",
        dash: [4, 4],
      },
      grid: {
        drawTicks: false,
        lineWidth: 2,
      },
      ticks: {
        font: {
          family: "Proxima Nova",
          size: 14,
          weight: 600,
        },
        color: "#D2D1D1",
      },
    },
    y: {
      display: false,
      border: {
        display: false,
      },
      grid: {
        drawTicks: false,
      },
    },
  },
};

export default function GeneralStatistics() {
  return (
    <div className={styles.card}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Общая статистика</h2>
        <div className={styles.periods}>
          <button className={styles.periodButton}>Неделя</button>
          <button className={styles.periodButton}>Месяц</button>
          <button className={styles.periodButton}>Год</button>
        </div>
      </div>
      <Line data={data} options={options} />
      <div className={styles.legendContainer}>
        <GeneralStatisticsLegendLabel
          backgroundColor="#73CF7A"
          title="Выручка"
          value={8615253}
        />
        <GeneralStatisticsLegendLabel
          backgroundColor="#73CF7A"
          title="Выручка"
          value={8615253}
        />
        <GeneralStatisticsLegendLabel
          backgroundColor="#73CF7A"
          title="Выручка"
          value={8615253}
        />
        <GeneralStatisticsLegendLabel
          backgroundColor="#73CF7A"
          title="Выручка"
          value={8615253}
        />
        <GeneralStatisticsLegendLabel
          backgroundColor="#73CF7A"
          title="Выручка"
          value={8615253}
        />
      </div>
    </div>
  );
}
