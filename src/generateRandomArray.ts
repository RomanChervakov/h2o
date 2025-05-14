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
