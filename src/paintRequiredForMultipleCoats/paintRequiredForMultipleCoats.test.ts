import paintRequiredForMultipleCoats from './paintRequiredForMultipleCoats';

describe('paintRequiredForMultipleCoats', () => {
  test('should calculate paint required correctly for positive values', () => {
    expect(paintRequiredForMultipleCoats('100', '10', '2')).toBeCloseTo(20);
    expect(paintRequiredForMultipleCoats('200', '20', '3')).toBeCloseTo(30);
    expect(paintRequiredForMultipleCoats('150', '15', '4')).toBeCloseTo(40);
  });

  test('should return 0 for area of 0', () => {
    expect(paintRequiredForMultipleCoats('0', '10', '2')).toBe(0);
    expect(paintRequiredForMultipleCoats('100', '10', '0')).toBe(0);
  });

  test('should return NaN for coveragePerLiter of 0', () => {
    expect(paintRequiredForMultipleCoats('100', '0', '2')).toBeNaN();
  });

  test('should handle negative values correctly', () => {
    expect(paintRequiredForMultipleCoats('-100', '10', '2')).toBeCloseTo(20);
    expect(paintRequiredForMultipleCoats('100', '-10', '2')).toBeCloseTo(20);
    expect(paintRequiredForMultipleCoats('100', '10', '-2')).toBeCloseTo(20);
  });

  test('should handle non-numeric strings by returning NaN', () => {
    expect(paintRequiredForMultipleCoats('abc', '10', '2')).toBeNaN();
    expect(paintRequiredForMultipleCoats('100', 'xyz', '2')).toBeNaN();
    expect(paintRequiredForMultipleCoats('100', '10', 'abc')).toBeNaN();
  });
});
