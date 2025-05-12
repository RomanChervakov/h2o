import { Line } from "react-chartjs-2";
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

const data = {
  labels: labels,
  datasets: [
    {
      label: "Cubic interpolation",
      data: [419, 524, 392, 471, 462, 152, 143, 519, 13, 154, 283, 293],
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
      data: [31, 204, 131, 272, 16, 122, 161, 200, 300, 17, 267, 77],
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
      data: [
        331, 394, 431, 272, -50, 202, 261, 448, 496, 535, 367, 477, 20, 20, 29,
      ],
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
      data: [10, 10, 20, 30, 40, 30, 10, 10, 45, 89, 1, 1],
      borderColor: "#F5E230",
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
      title: {
        display: true,
      },
    },
  },
};

export default function GeneralStatistics() {
  return (
    <div style={{ width: 800 }}>
      <Line data={data} options={options} />
    </div>
  );
}
