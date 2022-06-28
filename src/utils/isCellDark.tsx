export function isCellDark(x: number, y: number): boolean {
  if (x % 2 === 0) {
    return y % 2 !== 0;
  }

  return y % 2 === 0;
}
