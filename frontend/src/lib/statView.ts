import type { StatKey } from "../types";

export const STAT_VIEW: Record<StatKey, { color: string; iconPath: string }> = {
  strength: {
    color: "var(--stat-strength)",
    iconPath: "M6.5 6.5l11 11M4 20l3.5-3.5M20 4l-3.5 3.5M2 22l3-3M19 5l3-3",
  },
  intellect: {
    color: "var(--stat-intellect)",
    iconPath:
      "M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15z",
  },
  health: {
    color: "var(--stat-health)",
    iconPath:
      "M12 21s-7-4.5-9.5-9C1 8.5 2.5 5 6 5c2 0 3.5 1.2 4 2.2C10.5 6.2 12 5 14 5c3.5 0 5 3.5 3.5 7-2.5 4.5-9.5 9-9.5 9z",
  },
  discipline: {
    color: "var(--stat-discipline)",
    iconPath: "M12 2l7 4v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6z",
  },
};
