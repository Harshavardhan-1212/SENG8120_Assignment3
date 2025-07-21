export default function calculateTotalCost(
  paintCost: string,
  laborCost: string
): number {
  const paint = Math.abs(parseFloat(paintCost));
  const labor = Math.abs(parseFloat(laborCost));

  if (isNaN(paint) || isNaN(labor)) return NaN;

  return paint + labor;
}