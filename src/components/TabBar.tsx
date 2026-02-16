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
        <span style={styles.windowBtn}>&#8211;</span>
        <span style={styles.windowBtn}>&#9723;</span>
        <span style={{ ...styles.windowBtn, ...styles.closeBtn }}>&#10005;</span>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  tabBar: {
    display: "flex",
    alignItems: "center",
    background: "#202124",
    paddingTop: "8px",
    paddingRight: "8px",
    paddingBottom: "0",
    paddingLeft: "8px",
    minHeight: "40px",
    WebkitAppRegion: "drag" as unknown as string,
  } as React.CSSProperties,
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
    color: "#9aa0a6",
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0",
    cursor: "default",
    background: "#5f6368",
  },
  closeBtn: {
    background: "#5f6368",
  },
};
