import estimatePaintingTime from './estimatePaintingTime';

describe('estimatePaintingTime', () => {
  test('should calculate painting time correctly for positive values', () => {
    expect(estimatePaintingTime('100', '10')).toBeCloseTo(10);
    expect(estimatePaintingTime('200', '20')).toBeCloseTo(10);
    expect(estimatePaintingTime('150', '15')).toBeCloseTo(10);
  });

  test('should return Infinity for painting speed of 0', () => {
   expect(estimatePaintingTime('100', '0')).toBe(Infinity);
  });

  test('should handle area of 0 correctly', () => {
    expect(estimatePaintingTime('0', '10')).toBe(0);
  });

  test('should handle negative values correctly', () => {
    expect(estimatePaintingTime('-100', '10')).toBeCloseTo(10);
    expect(estimatePaintingTime('100', '-10')).toBeCloseTo(10);
    expect(estimatePaintingTime('-100', '-10')).toBeCloseTo(10);
  });

  test('should handle non-numeric strings by returning NaN', () => {
    expect(estimatePaintingTime('abc', '10')).toBeNaN();
    expect(estimatePaintingTime('100', 'xyz')).toBeNaN();
    expect(estimatePaintingTime('abc', 'xyz')).toBeNaN();
  });
});

