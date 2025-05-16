import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  type ChartData,
  type ChartOptions,
  type ScriptableTooltipContext,
  type TooltipItem,
} from "chart.js/auto";
import { ru } from "date-fns/locale";
import {
  TimeScale,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import "chartjs-adapter-date-fns";
import type { TUnit } from "../../types.ts";
ChartJS.register(
  LineElement,
  TimeScale,
  LinearScale,
  PointElement,
  LineController,
  Tooltip,
  Legend,
);

interface ILineChartProps {
  data: ChartData<"line">;
  unit: TUnit;
}

export default function LineChart({ data, unit }: ILineChartProps) {
  const options: ChartOptions<"line"> = {
    responsive: true,
    aspectRatio: 2.8,
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
          label: (tooltipItem: TooltipItem<"line">) =>
            `₽ ${Number(tooltipItem.raw).toLocaleString("fr-FR")}`,
          title: () => "",
        },
        displayColors: false,
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit,
          displayFormats: {
            month: "MMM",
          },
        },
        adapters: {
          date: {
            locale: ru,
          },
        },
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

  return <Line data={data} options={options} />;
}
