export default function getRandomDateInYear(year: number): Date {
  const start: Date = new Date(year, 0, 1);
  const end: Date = new Date(year, 11, 31);
  const randomTimestamp: number =
    Math.random() * (end.getTime() - start.getTime()) + start.getTime();
  return new Date(randomTimestamp);
}
