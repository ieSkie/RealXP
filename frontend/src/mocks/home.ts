import type { MeResponse } from "../types";

export const homeMock: MeResponse = {
  user: { id: "mock-1", email: "pasha@example.com" },
  stats: [
    { name: "Сила", icon: "strength", totalActions: 47 },
    { name: "Интеллект", icon: "intellect", totalActions: 82 },
    { name: "Здоровье", icon: "health", totalActions: 30 },
    { name: "Дисциплина", icon: "discipline", totalActions: 95 },
  ],
};
