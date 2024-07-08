import { describe, expect, it } from "vitest";
import { randomInt } from "./randomInt";

describe("randomInt", () => {
  it("returns the number between minimum and maximum.", () => {
    const minimum = 3;
    const maximum = 5;
    const result = randomInt(minimum, maximum);

    expect(result).toBeGreaterThanOrEqual(minimum);
  });

  it("throws an error, if  minimum is greater than maximum", () => {
    expect(() => randomInt(3, 1)).toThrowError();
  });
});
