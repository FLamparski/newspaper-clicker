const ordersOfMagnitude: { max: bigint; suffix: string }[] = [
  { max: 1_000n, suffix: "" },
  { max: 1_000_000n, suffix: "k" },
  { max: 1_000_000_000n, suffix: "M" },
  { max: 1_000_000_000_000n, suffix: "B" },
  { max: 1_000_000_000_000_000n, suffix: "T" },
  { max: 1_000_000_000_000_000_000n, suffix: "Qa" },
  { max: 1_000_000_000_000_000_000_000n, suffix: "Qi" },
  { max: 1_000_000_000_000_000_000_000_000n, suffix: "Sx" },
  { max: 1_000_000_000_000_000_000_000_000_000n, suffix: "Sp" },
  { max: 1_000_000_000_000_000_000_000_000_000_000n, suffix: "Oc" },
  { max: 1_000_000_000_000_000_000_000_000_000_000_000n, suffix: "No" },
];

export function formatNumberWithSuffix(number: number): string {
  if (number < 1000) {
    return `${Math.floor(number)}`;
  }

  const n = BigInt(number | 0);
  let orderIndex = ordersOfMagnitude.length - 1;
  while (ordersOfMagnitude[orderIndex].max > number) {
    orderIndex--;
  }
  const order = ordersOfMagnitude[orderIndex + 1];
  const divisor = order.max / 10000n;
  const with1DecimalPlace = Number.parseInt(`${n / divisor}`) / 10;
  return `${with1DecimalPlace}${order.suffix}`;
}
