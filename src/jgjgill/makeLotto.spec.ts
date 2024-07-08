import { describe, expect, it } from "vitest";
import { makeLotto } from "./makeLotto";

describe("makeLotto", () => {
  it("returns a random number from 1 to 45.", () => {
    const result = makeLotto();
    const uniqueValues = new Set(result);

    expect(result.length).toBe(6);
    expect(uniqueValues.size).toBe(result.length);

    result.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(1);
      expect(value).toBeLessThanOrEqual(45);
    });
  });
});
