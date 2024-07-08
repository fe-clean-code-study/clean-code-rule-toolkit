import { randomInt } from "./randomInt.ts";

const LAST_NUMBER = 45;
const COUNT = 6;

export function makeLotto() {
  const lottoNumbers = Array.from({ length: LAST_NUMBER }, (_, i) => i + 1);
  const result = [];

  for (let i = 0; i < COUNT; i++) {
    const randomNumber = randomInt(i, lottoNumbers.length);
    const value = lottoNumbers[randomNumber];

    lottoNumbers[randomNumber] = lottoNumbers[i];
    lottoNumbers[i] = value;

    result.push(value);
  }

  return result;
}
