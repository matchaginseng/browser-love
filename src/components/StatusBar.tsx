"use client";

export default function StatusBar() {
  return (
    <div style={styles.statusBar}>
      <div style={styles.section}>
        <span style={styles.icon}>✓</span> Done
      </div>
      <div style={styles.rightSection}>
        <div style={styles.zone}>Internet</div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  statusBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#c0c0c0",
    padding: "2px 4px",
    fontSize: "12px",
    minHeight: "20px",
    borderTop: "2px solid",
    borderTopColor: "#808080",
  },
  section: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    border: "1px solid",
    borderColor: "#808080 #ffffff #ffffff #808080",
    padding: "0 6px",
    flex: 1,
  },
  icon: {
    fontSize: "10px",
    color: "#008000",
  },
  rightSection: {
    display: "flex",
    gap: "2px",
  },
  zone: {
    border: "1px solid",
    borderColor: "#808080 #ffffff #ffffff #808080",
    padding: "0 8px",
    fontSize: "11px",
  },
};
