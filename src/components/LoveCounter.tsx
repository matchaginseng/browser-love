"use client";

import { useBrowser } from "@/context/useBrowser";

export default function LoveCounter() {
  const { state } = useBrowser();

  return (
    <div style={styles.counter}>
      <span style={styles.heart}>{"\u2665"}</span>
      <span style={styles.points}>{state.lovePoints}</span>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  counter: {
    position: "absolute" as const,
    bottom: "8px",
    left: "8px",
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    gap: "4px",
    background: "rgba(45, 21, 32, 0.85)",
    color: "#f8a4c0",
    padding: "4px 10px",
    borderRadius: "12px",
    fontSize: "13px",
    fontWeight: 600,
    backdropFilter: "blur(4px)",
    userSelect: "none",
  },
  heart: {
    fontSize: "14px",
    color: "#f8a4c0",
  },
  points: {
    fontVariantNumeric: "tabular-nums",
  },
};
