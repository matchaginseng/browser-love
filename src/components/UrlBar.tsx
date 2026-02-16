"use client";

interface UrlBarProps {
  keywords: string[];
}

export default function UrlBar({ keywords }: UrlBarProps) {
  const url = `http://${keywords.join("/")}`;

  return (
    <div style={styles.wrapper}>
      <span style={styles.label}>Address</span>
      <div style={styles.inputContainer}>
        <span style={styles.icon}>📄</span>
        <input
          type="text"
          readOnly
          value={url}
          style={styles.input}
          tabIndex={-1}
        />
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    flex: 1,
  },
  label: {
    fontSize: "14px",
    whiteSpace: "nowrap",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    background: "#ffffff",
    border: "2px solid",
    borderColor: "#808080 #ffffff #ffffff #808080",
    boxShadow: "inset 1px 1px 0 #000000, inset -1px -1px 0 #dfdfdf",
    padding: "1px 4px",
  },
  icon: {
    fontSize: "12px",
    marginRight: "4px",
    flexShrink: 0,
  },
  input: {
    border: "none",
    outline: "none",
    background: "transparent",
    flex: 1,
    fontSize: "14px",
    fontFamily: "inherit",
    color: "#000000",
  },
};
