export function random(minimum: number, maximum: number): number {
  if (minimum >= maximum) {
    throw new Error("maximum은 minimum보다 커야 합니다.");
  }

  return Math.random() * (maximum - minimum) + minimum;
}
