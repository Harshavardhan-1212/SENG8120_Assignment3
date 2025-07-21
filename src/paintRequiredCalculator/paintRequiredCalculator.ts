export default function paintRequiredCalculator(
  area: string,
  coveragePerLiter: string
): number {
  const a = Math.abs(parseFloat(area));
  const coverage = Math.abs(parseFloat(coveragePerLiter));

  if (isNaN(a) || isNaN(coverage) || coverage === 0) return NaN;

  return a / coverage;
}