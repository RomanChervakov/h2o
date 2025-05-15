export interface IDataset {
  label: string;
  data: number[];
  borderColor: string;
  borderWidth: number;
  fill: boolean;
  tension: number;
  pointRadius: number;
  pointHoverRadius: number;
  pointHoverBorderWidth: number;
  pointHoverBackgroundColor: string;
}

export default function createDataset(
  label: string,
  data: number[],
  borderColor: string,
): IDataset {
  return {
    label,
    data,
    borderColor,
    borderWidth: 3,
    fill: false,
    tension: 0.4,
    pointRadius: 0,
    pointHoverRadius: 8,
    pointHoverBorderWidth: 3,
    pointHoverBackgroundColor: "#FFFFFF",
  };
}
