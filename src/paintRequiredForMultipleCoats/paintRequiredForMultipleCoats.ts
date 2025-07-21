export default function paintRequiredForMultipleCoats(
  area: string,
  coveragePerLiter: string,
  coats: string
): number {
  const a = Math.abs(parseFloat(area));
  const coverage = Math.abs(parseFloat(coveragePerLiter));
  const c = Math.abs(parseFloat(coats));

  if (isNaN(a) || isNaN(coverage) || isNaN(c) || coverage === 0) return NaN;

  return (a / coverage) * c;
}