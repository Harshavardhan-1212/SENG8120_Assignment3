import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("returns correct area for valid positive values", () => {
    expect(calculateCanvasSize("5", "10")).toBeCloseTo(50);
  });

  test("should handle negative values correctly", () => {
    expect(calculateCanvasSize("-5", "15")).toBeCloseTo(75);
  });

  test("returns 0 when both inputs are 0", () => {
    expect(calculateCanvasSize("0", "0")).toBe(0);
  });

  test("should handle non-numeric strings by returning NaN", () => {
    expect(calculateCanvasSize("abc", "10")).toBeNaN();
    expect(calculateCanvasSize("10", "xyz")).toBeNaN();
  });
});