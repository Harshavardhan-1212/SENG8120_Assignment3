import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test('should calculate paint required correctly for positive values', () => {
      expect(paintRequiredCalculator("50", "10")).toBeCloseTo(5);
    expect(paintRequiredCalculator("100", "20")).toBeCloseTo(5);
    expect(paintRequiredCalculator("75", "15")).toBeCloseTo(5);
    });
  
    test("should return NaN when coverage per liter is 0", () => {
    expect(paintRequiredCalculator("50", "0")).toBeNaN();
  });
  
    test('should handle area of 0 correctly', () => {
      expect(paintRequiredCalculator("0", "10")).toBe(0);
    });
  
    test('should handle negative values correctly', () => {
      expect(paintRequiredCalculator("-50", "10")).toBeCloseTo(5);
      expect(paintRequiredCalculator("50", "-10")).toBeCloseTo(5);
      expect(paintRequiredCalculator("-50", "-10")).toBeCloseTo(5);
    });
  
    test('should handle non-numeric strings by returning NaN', () => {
      expect(paintRequiredCalculator('abc', '10')).toBeNaN();
      expect(paintRequiredCalculator('100', 'xyz')).toBeNaN();
      expect(paintRequiredCalculator('abc', 'xyz')).toBeNaN();
    });
});
