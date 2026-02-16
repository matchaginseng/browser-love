"use client";

import { useBrowser } from "@/context/useBrowser";
import { getPageDefinition } from "@/content/registry";
import { getActiveTab } from "@/lib/navigation";

export default function TitleBar() {
  const { state } = useBrowser();
  const activeTab = getActiveTab(state);
  const page = getPageDefinition(activeTab.currentPageId);
  const title = page?.tabTitle ?? "Internet Explorer";

  return (
    <div style={styles.titleBar}>
      <div style={styles.titleLeft}>
        <span style={styles.icon}>🌐</span>
        <span style={styles.titleText}>{title} - Internet Explorer</span>
      </div>
      <div style={styles.titleButtons}>
        <button style={styles.titleBtn}>_</button>
        <button style={styles.titleBtn}>□</button>
        <button style={{ ...styles.titleBtn, ...styles.closeBtn }}>✕</button>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  titleBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "linear-gradient(to right, #000080, #1084d0)",
    padding: "2px 4px",
    minHeight: "24px",
  },
  titleLeft: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    overflow: "hidden",
  },
  icon: {
    fontSize: "14px",
    flexShrink: 0,
  },
  titleText: {
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: "bold",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  titleButtons: {
    display: "flex",
    gap: "2px",
    flexShrink: 0,
  },
  titleBtn: {
    width: "18px",
    height: "18px",
    fontSize: "10px",
    background: "#c0c0c0",
    border: "2px solid",
    borderColor: "#ffffff #000000 #000000 #ffffff",
    boxShadow: "inset 1px 1px 0 #dfdfdf, inset -1px -1px 0 #808080",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    fontFamily: "inherit",
    lineHeight: 1,
  },
  closeBtn: {
    background: "#c0c0c0",
  },
};
