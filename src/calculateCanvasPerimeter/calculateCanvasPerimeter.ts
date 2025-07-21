export default function calculateCanvasPerimeter(
  length: string,
  width: string
): number {
  const l = Math.abs(parseFloat(length));
  const w = Math.abs(parseFloat(width));

  if (isNaN(l) || isNaN(w)) return NaN;

  return 2 * (l + w);
}