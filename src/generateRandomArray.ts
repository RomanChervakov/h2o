import { eachDayOfInterval, endOfYear, startOfYear } from "date-fns";

export default function generateRandomArray(
  minAverage: number,
  maxAverage: number,
  length: number,
  minSum: number,
  maxSum: number,
): number[] {
  const targetAverage = Math.random() * (maxAverage - minAverage) + minAverage;

  const array: number[] = Array.from(
    { length: length },
    () => Math.random() * targetAverage * 2,
  );
  const sum = array.reduce((acc, val) => acc + val, 0);
  const adjustmentFactor = (Math.random() * (maxSum - minSum) + minSum) / sum;

  const adjustedArray = array.map((num) => num * adjustmentFactor);

  const finalSum = adjustedArray.reduce((acc, val) => acc + val, 0);
  const finalAverage = finalSum / length;

  return Math.abs(finalAverage - targetAverage) > 1000
    ? adjustedArray.map((num) => num + (targetAverage - finalAverage))
    : adjustedArray;
}

// console.log(randomArray);
//
// console.log(
//   "Sum:",
//   randomArray.reduce((acc, val) => acc + val, 0),
// );
//
// console.log(
//   "Average:",
//   randomArray.reduce((acc, val) => acc + val, 0) / randomArray.length,
// );

export function generateRandomSequence(
  count: number,
  sumRange: [number, number],
  numberRange: [number, number],
): number[] | null {
  const [minSum, maxSum] = sumRange;
  const [minNum, maxNum] = numberRange;

  if (minNum * count > maxSum || maxNum * count < minSum) {
    return null;
  }

  let result: number[] = Array(count).fill(minNum);
  let currentSum = minNum * count;

  const adjustValues = (
    condition: (val: number) => boolean,
    increment: number,
  ) => {
    return result.map((val) => {
      if (condition(val) && currentSum !== minSum && currentSum !== maxSum) {
        currentSum += increment;
        return val + increment;
      }
      return val;
    });
  };

  result = adjustValues((val) => val < maxNum, 1);
  result = adjustValues((val) => val > minNum, -1);

  result = result.map((val) => {
    const remaining = maxNum - val;
    const randomChange = Math.floor(Math.random() * (remaining + 1));
    currentSum += randomChange;
    return val + randomChange;
  });

  if (currentSum >= minSum && currentSum <= maxSum) {
    return result;
  } else {
    return null;
  }
}

export function getAllDatesInYear(year: number): Date[] {
  return eachDayOfInterval({
    start: startOfYear(new Date(year, 0, 1)),
    end: endOfYear(new Date(year, 0, 1)),
  });
}

const alldates = getAllDatesInYear(2024);

console.log(
  generateRandomSequence(
    alldates.length,
    [-30000000, 150000000],
    [-1500000, 9000000],
  ),
);
