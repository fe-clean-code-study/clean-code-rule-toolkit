import { describe, expect, it } from "vitest";
import { random } from "./random";

describe("random", () => {
  it("returns the number between minimum and maximum.", () => {
    const minimum = 3;
    const maximum = 5;
    const result = random(minimum, maximum);

    expect(result).toBeGreaterThanOrEqual(minimum);
    expect(result).toBeLessThan(maximum);
  });

  it("throws an error, if  minimum is greater than maximum", () => {
    expect(() => random(3, 1)).toThrowError();
  });
});
