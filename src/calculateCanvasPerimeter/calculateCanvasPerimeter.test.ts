import calculateCanvasPerimeter from "./calculateCanvasPerimeter";

describe("calculateCanvasPerimeter", () => {
  test("returns correct perimeter for positive inputs", () => {
    expect(calculateCanvasPerimeter("10", "100")).toBeCloseTo(220);
    expect(calculateCanvasPerimeter("5", "5")).toBeCloseTo(20);
    expect(calculateCanvasPerimeter("2.5", "7.5")).toBeCloseTo(20);
  });

  test("handles negative inputs as positive", () => {
    expect(calculateCanvasPerimeter("-10", "20")).toBeCloseTo(60);
  });

  test("should handle non-numeric strings by returning NaN", () => {
    expect(calculateCanvasPerimeter("abc", "20")).toBeNaN();
    expect(calculateCanvasPerimeter("10", "xyz")).toBeNaN();
  });

  test("returns 0 if both inputs are 0", () => {
    expect(calculateCanvasPerimeter("0", "0")).toBe(0);
  });
});