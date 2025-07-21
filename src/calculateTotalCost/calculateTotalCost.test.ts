import calculateTotalCost from './calculateTotalCost';

describe('calculateTotalCost', () => {
  test('should calculate total cost correctly for positive values', () => {
    expect(calculateTotalCost('100', '50')).toBeCloseTo(150);
    expect(calculateTotalCost('200', '75')).toBeCloseTo(275);
    expect(calculateTotalCost('150', '100')).toBeCloseTo(250);
  });

  test('returns correct total when one cost is zero', () => {
    expect(calculateTotalCost('100', '0')).toBeCloseTo(100);
    expect(calculateTotalCost('0', '50')).toBeCloseTo(50);
  });

  test('should handle negative values correctly', () => {
    expect(calculateTotalCost('-100', '50')).toBeCloseTo(150);
    expect(calculateTotalCost('100', '-50')).toBeCloseTo(150);
    expect(calculateTotalCost('-100', '-50')).toBeCloseTo(150);
  });

  test('should return 0 when both costs are 0', () => {
    expect(calculateTotalCost('0', '0')).toBe(0);
  });

  test('should handle non-numeric strings by returning NaN', () => {
    expect(calculateTotalCost('abc', '50')).toBeNaN();
    expect(calculateTotalCost('100', 'xyz')).toBeNaN();
    expect(calculateTotalCost('abc', 'xyz')).toBeNaN();
  });
});
