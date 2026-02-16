"use client";

interface UrlBarProps {
  keywords: string[];
}

export default function UrlBar({ keywords }: UrlBarProps) {
  const url = `${keywords.join("/")}`;

  return (
    <div style={styles.bar}>
      <span style={styles.lockIcon}>&#128274;</span>
      <input
        type="text"
        readOnly
        value={url}
        style={styles.input}
        tabIndex={-1}
      />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  bar: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    background: "#202124",
    borderRadius: "24px",
    padding: "6px 16px",
    gap: "8px",
  },
  lockIcon: {
    fontSize: "12px",
    color: "#9aa0a6",
    flexShrink: 0,
  },
  input: {
    border: "none",
    outline: "none",
    background: "transparent",
    flex: 1,
    fontSize: "14px",
    fontFamily: "inherit",
    color: "#e8eaed",
  },
};
