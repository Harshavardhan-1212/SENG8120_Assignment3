export default function estimatePaintingTime(
  area: string,
  paintingSpeed: string
): number {
  const a = Math.abs(parseFloat(area));
  const speed = Math.abs(parseFloat(paintingSpeed));

  if (isNaN(a) || isNaN(speed)) return NaN;

  if (speed === 0) return Infinity;

  return a / speed;
}