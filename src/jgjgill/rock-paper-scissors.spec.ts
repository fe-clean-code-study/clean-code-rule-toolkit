import { describe, expect, it, vi } from "vitest";
import { rockPaperScissorsMoving } from "./rock-paper-scissors";

describe("rockPaperScissorsMoving", () => {
  it.each([
    ["바위", 0] as const,
    ["보", 1 / 3] as const,
    ["가위", 2 / 3] as const,
  ])("returns the '이동거리' on victory.", (유저_선택, index) => {
    vi.spyOn(Math, "random").mockReturnValue(index);
    const 이동거리 = 3;
    const result = rockPaperScissorsMoving(유저_선택, 이동거리);

    expect(result).toBe(이동거리);
  });
});
