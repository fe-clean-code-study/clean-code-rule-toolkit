import { random } from "./random.ts";

export function randomInt(minimum: number, maximum: number): number {
  return Math.floor(random(minimum, maximum));
}
