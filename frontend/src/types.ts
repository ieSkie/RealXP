export type StatKey = "strength" | "intellect" | "health" | "discipline";

export interface StatDto {
  name: string;
  icon: StatKey;
  totalActions: number;
}

export interface MeResponse {
  user: { id: string; email: string };
  stats: StatDto[];
}
