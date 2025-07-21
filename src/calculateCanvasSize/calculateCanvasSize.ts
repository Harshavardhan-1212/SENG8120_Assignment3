export default function calculateCanvasSize(
  length: string,
  width: string
): number {
  const l = Math.abs(parseFloat(length));
  const w = Math.abs(parseFloat(width));

  if (isNaN(l) || isNaN(w)) return NaN;

  return l * w;
}
