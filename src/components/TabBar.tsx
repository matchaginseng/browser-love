"use client";

import { useBrowser } from "@/context/useBrowser";
import Tab from "./Tab";

export default function TabBar() {
  const { state, dispatch } = useBrowser();

  return (
    <div style={styles.tabBar}>
      <div style={styles.tabList}>
        {state.tabs.map((tab) => (
          <Tab
            key={tab.id}
            tab={tab}
            isActive={tab.id === state.activeTabId}
          />
        ))}
        <button
          onClick={() =>
            dispatch({ type: "OPEN_NEW_TAB", payload: { pageId: "home" } })
          }
          style={styles.newTabBtn}
          aria-label="New tab"
        >
          +
        </button>
      </div>
      <div style={styles.windowControls}>
        <span style={{ ...styles.windowBtn, background: "#e8a0b4" }}></span>
        <span style={{ ...styles.windowBtn, background: "#c4899e" }}></span>
        <span style={{ ...styles.windowBtn, background: "#f8a4c0" }}></span>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  tabBar: {
    display: "flex",
    alignItems: "center",
    background: "#2d1520",
    paddingTop: "8px",
    paddingRight: "8px",
    paddingBottom: "0",
    paddingLeft: "8px",
    minHeight: "40px",
  },
  tabList: {
    display: "flex",
    alignItems: "flex-end",
    gap: "1px",
    flex: 1,
    overflow: "hidden",
  },
  newTabBtn: {
    width: "28px",
    height: "28px",
    border: "none",
    background: "transparent",
    color: "#c4899e",
    fontSize: "18px",
    cursor: "pointer",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    fontFamily: "inherit",
    marginLeft: "2px",
  },
  windowControls: {
    display: "flex",
    gap: "8px",
    marginLeft: "16px",
    flexShrink: 0,
    alignItems: "center",
  },
  windowBtn: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    display: "inline-block",
    cursor: "default",
  },
};
