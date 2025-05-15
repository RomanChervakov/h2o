export const TRANSACTION_TYPES = {
  EXPANSES: "expanses",
  INCOME: "income",
  REVENUE: "revenue",
  DEBT: "debt",
} as const;

export const DIVISIONS = {
  B2B: "B2B",
  B2C: "B2C",
} as const;

type TDivision = (typeof DIVISIONS)[keyof typeof DIVISIONS];
type TTransaction = (typeof TRANSACTION_TYPES)[keyof typeof TRANSACTION_TYPES];

interface IDataItem {
  division: TDivision;
  date: Date;
  amount: number;
  type: TTransaction;
}

const YEAR = 2024;
const MONTHS_IN_YEAR = 12;

function getRandomDateInYear(year: number): Date {
  const start: Date = new Date(year, 0, 1);
  const end: Date = new Date(year, 11, 31);
  const randomTimestamp: number =
    Math.random() * (end.getTime() - start.getTime()) + start.getTime();
  return new Date(randomTimestamp);
}

function getRandomNumberInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArrayItem<T>(array: T[]) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const randomDataSortedByDate = Array.from(
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

function sumByYear(
  data: IDataItem[],
  division: TDivision,
  type: TTransaction,
  year: number,
): IDataItem[] {
  const filteredData = data.filter(
    (item) => item.division === division && item.type === type,
  );

  return Array.from({ length: MONTHS_IN_YEAR }, (_, month) => {
    const amount = filteredData
      .filter((item) => item.date.getMonth() === month)
      .reduce((sum, item) => sum + item.amount, 0);
    return {
      date: new Date(year, month),
      amount,
      division,
      type,
    };
  });
}

function sumByMonth(
  data: IDataItem[],
  division: TDivision,
  type: TTransaction,
  year: number,
  month: number,
): IDataItem[] {
  const filteredData = data.filter(
    (item) =>
      item.division === division &&
      item.type === type &&
      item.date.getMonth() === month,
  );

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  return Array.from({ length: daysInMonth }, (_, date) => {
    const amount = filteredData
      .filter((item) => item.date.getDate() === date + 1)
      .reduce((sum, item) => sum + item.amount, 0);
    return {
      date: new Date(year, month, date + 1),
      amount,
      division,
      type,
    };
  });
}

export const randomDataB2C = sumByMonth(
  randomDataSortedByDate,
  "B2C",
  "income",
  YEAR,
  1,
);
