import calculatePaintCost from './calculatePaintCost';

describe('calculatePaintCost', () => {
  test('calculates paint cost correctly for positive values', () => {
    expect(calculatePaintCost('10', '5')).toBeCloseTo(50);
    expect(calculatePaintCost('20', '7.5')).toBeCloseTo(150);
    expect(calculatePaintCost('15', '10')).toBeCloseTo(150);
  });

  test('returns 0 when paint required or cost per liter is 0', () => {
    expect(calculatePaintCost('0', '5')).toBe(0);
    expect(calculatePaintCost('10', '0')).toBe(0);
    expect(calculatePaintCost('0', '0')).toBe(0);
  });

  test('should handle negative values correctly', () => {
    expect(calculatePaintCost('-10', '5')).toBeCloseTo(50);
    expect(calculatePaintCost('10', '-5')).toBeCloseTo(50);
    expect(calculatePaintCost('-10', '-5')).toBeCloseTo(50);
  });

  test('should handle non-numeric strings by returning NaN', () => {
    expect(calculatePaintCost('abc', '5')).toBeNaN();
    expect(calculatePaintCost('10', 'xyz')).toBeNaN();
    expect(calculatePaintCost('abc', 'xyz')).toBeNaN();
  });
});
