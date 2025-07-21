export default function convertAreaToSquareFeet(area: string): number {
  const conversionFactor = 10.7639;
  const a = parseFloat(area);

  if (isNaN(a)) return NaN;

  return Math.abs(a) * conversionFactor;
}