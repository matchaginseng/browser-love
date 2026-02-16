"use client";

import { useBrowser } from "@/context/useBrowser";
import { getPageDefinition } from "@/content/registry";

export default function Sidebar() {
  const { state, dispatch } = useBrowser();

  return (
    <>
      <button
        onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })}
        style={styles.toggle}
        aria-label={state.sidebarOpen ? "Close sidebar" : "Open sidebar"}
      >
        {state.sidebarOpen ? "◀" : "▶"}
        <span style={styles.toggleLabel}>History</span>
      </button>
      {state.sidebarOpen && (
        <div style={styles.sidebar}>
          <div style={styles.header}>
            <span style={styles.headerIcon}>📋</span>
            <strong>Click History</strong>
          </div>
          <div style={styles.list}>
            {[...state.clickHistory].reverse().map((entry, i) => {
              const page = getPageDefinition(entry.pageId);
              return (
                <div
                  key={i}
                  style={styles.entry}
                  onClick={() =>
                    dispatch({
                      type: "NAVIGATE_TO_PAGE",
                      payload: { pageId: entry.pageId },
                    })
                  }
                >
                  <span style={styles.entryTitle}>
                    {page?.tabTitle ?? entry.pageId}
                  </span>
                  <span style={styles.entryTime}>
                    {new Date(entry.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  toggle: {
    position: "absolute" as const,
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    background: "#c0c0c0",
    border: "2px solid",
    borderColor: "#ffffff #000000 #000000 #ffffff",
    borderLeft: "none",
    padding: "8px 2px",
    cursor: "pointer",
    fontSize: "10px",
    fontFamily: "inherit",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "2px",
    writingMode: "vertical-lr" as React.CSSProperties["writingMode"],
  },
  toggleLabel: {
    fontSize: "11px",
    letterSpacing: "1px",
  },
  sidebar: {
    width: "200px",
    background: "#c0c0c0",
    borderRight: "2px solid",
    borderRightColor: "#808080",
    display: "flex",
    flexDirection: "column" as const,
    flexShrink: 0,
    overflow: "hidden",
  },
  header: {
    padding: "6px 8px",
    borderBottom: "2px solid #808080",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    fontSize: "14px",
  },
  headerIcon: {
    fontSize: "12px",
  },
  list: {
    flex: 1,
    overflow: "auto",
  },
  entry: {
    padding: "4px 8px",
    cursor: "pointer",
    borderBottom: "1px solid #a0a0a0",
    display: "flex",
    flexDirection: "column" as const,
    fontSize: "13px",
  },
  entryTitle: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: "#000080",
    textDecoration: "underline",
  },
  entryTime: {
    fontSize: "11px",
    color: "#808080",
  },
};
