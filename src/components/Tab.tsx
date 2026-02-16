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
      onClick={() => dispatch({ type: "SWITCH_TAB", payload: { tabId: tab.id } })}
      style={{
        ...styles.tab,
        ...(isActive ? styles.activeTab : styles.inactiveTab),
      }}
    >
      <span style={styles.tabTitle}>{title}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          dispatch({ type: "CLOSE_TAB", payload: { tabId: tab.id } });
        }}
        style={styles.closeBtn}
        aria-label="Close tab"
      >
        ✕
      </button>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  tab: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    paddingTop: "2px",
    paddingRight: "8px",
    paddingBottom: "2px",
    paddingLeft: "8px",
    cursor: "pointer",
    fontSize: "14px",
    maxWidth: "180px",
    minWidth: "80px",
    border: "2px solid",
    userSelect: "none",
  },
  activeTab: {
    background: "#c0c0c0",
    borderColor: "#ffffff #000000 #c0c0c0 #ffffff",
    boxShadow: "inset 1px 1px 0 #dfdfdf",
    marginBottom: "-2px",
    paddingBottom: "4px",
    zIndex: 1,
    position: "relative" as const,
  },
  inactiveTab: {
    background: "#a0a0a0",
    borderColor: "#dfdfdf #000000 #000000 #dfdfdf",
    marginTop: "2px",
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
    fontSize: "10px",
    padding: "0 2px",
    color: "#000",
    fontFamily: "inherit",
    flexShrink: 0,
  },
};
