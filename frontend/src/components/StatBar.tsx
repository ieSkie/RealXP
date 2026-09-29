import styles from "./StatBar.module.css";

interface Props {
  label: string;
  color: string;
  iconPath: string;
  percent: number;
}

export default function StatBar({ label, color, iconPath, percent }: Props) {
  return (
    <div className={styles.stat} aria-label={`${label}: ${percent}%`}>
      <div className={styles.icon} style={{ borderColor: color }}>
        <svg
          width="21"
          height="21"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d={iconPath} />
        </svg>
      </div>
      <span className={styles.percent}>{percent}%</span>
      <div className={styles.track}>
        <div
          className={styles.fill}
          style={{ height: `${percent}%`, background: color }}
        />
      </div>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
