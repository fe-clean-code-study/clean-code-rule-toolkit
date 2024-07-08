const 가위바위보 = ["가위", "바위", "보"] as const;

export function rockPaperScissorsMoving(
  유저_선택: (typeof 가위바위보)[number],
  이동거리: number
): number {
  const 가위바위보_인덱스 = Math.floor(Math.random() * 3);
  const 시스템_선택 = 가위바위보[가위바위보_인덱스];

  const 무승부 = 유저_선택 === 시스템_선택;
  const 승리 =
    (유저_선택 === "가위" && 시스템_선택 === "보") ||
    (유저_선택 === "바위" && 시스템_선택 === "가위") ||
    (유저_선택 === "보" && 시스템_선택 === "바위");
  const 패배 = !(무승부 || 승리);

  if (승리) {
    return 이동거리;
  }
  if (패배) {
    return -이동거리;
  }

  return 0; // 무승부
}
