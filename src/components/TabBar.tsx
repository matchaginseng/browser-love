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
      </div>
      <button
        className="win98-button"
        onClick={() =>
          dispatch({ type: "OPEN_NEW_TAB", payload: { pageId: "home" } })
        }
        style={styles.newTabBtn}
        aria-label="New tab"
      >
        +
      </button>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  tabBar: {
    display: "flex",
    alignItems: "flex-end",
    background: "#c0c0c0",
    padding: "4px 4px 0 4px",
    borderBottom: "2px solid #c0c0c0",
    minHeight: "30px",
  },
  tabList: {
    display: "flex",
    gap: "1px",
    flex: 1,
    overflow: "hidden",
  },
  newTabBtn: {
    fontSize: "14px",
    marginBottom: "2px",
    marginLeft: "4px",
    flexShrink: 0,
  },
};
