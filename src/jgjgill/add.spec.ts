import { describe, expect, it } from "vitest";
import { add } from "./add";

describe("add", () => {
  it("returns a + b", () => {
    const result = add(1, 3);

    expect(result).toBe(4);
  });
});
