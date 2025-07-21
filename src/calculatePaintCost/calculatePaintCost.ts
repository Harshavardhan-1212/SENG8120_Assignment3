export default function calculatePaintCost(
  paintRequired: string,
  costPerLiter: string
): number {
  const paint = Math.abs(parseFloat(paintRequired));
  const cost = Math.abs(parseFloat(costPerLiter));

  if (isNaN(paint) || isNaN(cost)) return NaN;

  return paint * cost;
}