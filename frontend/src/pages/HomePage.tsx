import { homeMock } from "../mocks/home";
import StatBar from "../components/StatBar";
import { STAT_VIEW } from "../lib/statView";
import { calcPercent } from "../lib/calcPercent";

export default function HomePage() {
  const data = homeMock;

  return (
    <main
      style={{
        display: "flex",
        gap: 24,
        justifyContent: "center",
        padding: 40,
      }}
    >
      {data.stats.map((s) => (
        <StatBar
          key={s.icon}
          label={s.name}
          color={STAT_VIEW[s.icon].color}
          iconPath={STAT_VIEW[s.icon].iconPath}
          percent={calcPercent(s.totalActions)}
        />
      ))}
    </main>
  );
}
