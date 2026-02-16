"use client";

import { TabState } from "@/types";
import { getPageDefinition } from "@/content/registry";
import { useBrowser } from "@/context/useBrowser";

interface TabProps {
  tab: TabState;
  isActive: boolean;
}

export default function Tab({ tab, isActive }: TabProps) {
  const { dispatch } = useBrowser();
  const page = getPageDefinition(tab.currentPageId);
  const title = page?.tabTitle ?? "New Tab";

  return (
    <div
      onClick={() =>
        dispatch({ type: "SWITCH_TAB", payload: { tabId: tab.id } })
      }
      style={{
        ...styles.tab,
        ...(isActive ? styles.activeTab : styles.inactiveTab),
      }}
    >
      <span style={styles.heart}>{isActive ? "\u2665" : "\u2661"}</span>
      <span style={styles.tabTitle}>{title}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          dispatch({ type: "CLOSE_TAB", payload: { tabId: tab.id } });
        }}
        style={styles.closeBtn}
        aria-label="Close tab"
      >
        &#10005;
      </button>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  tab: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    paddingTop: "6px",
    paddingRight: "12px",
    paddingBottom: "6px",
    paddingLeft: "10px",
    cursor: "pointer",
    fontSize: "12px",
    maxWidth: "220px",
    minWidth: "60px",
    borderRadius: "8px 8px 0 0",
    userSelect: "none",
    transition: "background 0.1s",
  },
  activeTab: {
    background: "#4a2840",
    color: "#f5e0e8",
  },
  inactiveTab: {
    background: "transparent",
    color: "#c4899e",
  },
  heart: {
    fontSize: "10px",
    flexShrink: 0,
    color: "#f8a4c0",
  },
  tabTitle: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    flex: 1,
  },
  closeBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "9px",
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "inherit",
    fontFamily: "inherit",
    flexShrink: 0,
    opacity: 0.7,
  },
};
