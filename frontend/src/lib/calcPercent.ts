// TODO: заменить на настоящую формулу (быстрый рост в начале, замедление, потолок 100%)
export function calcPercent(totalActions: number): number {
  return Math.min(100, totalActions);
}
