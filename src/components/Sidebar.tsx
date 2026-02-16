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
        <span style={styles.toggleIcon}>
          {state.sidebarOpen ? "\u276E" : "\u276F"}
        </span>
      </button>
      {state.sidebarOpen && (
        <div style={styles.sidebar}>
          <div style={styles.header}>
            <span style={styles.headerHeart}>{"\u2665"}</span>
            <strong>History</strong>
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
    background: "#fce8ef",
    border: "1px solid #f0c4d4",
    borderLeft: "none",
    borderRadius: "0 8px 8px 0",
    padding: "12px 4px",
    cursor: "pointer",
    fontSize: "12px",
    fontFamily: "inherit",
    color: "#a0607a",
    display: "flex",
    alignItems: "center",
  },
  toggleIcon: {
    fontSize: "10px",
  },
  sidebar: {
    width: "240px",
    background: "#fef0f4",
    borderRight: "1px solid #f0c4d4",
    display: "flex",
    flexDirection: "column" as const,
    flexShrink: 0,
    overflow: "hidden",
  },
  header: {
    padding: "12px 16px",
    borderBottom: "1px solid #f0c4d4",
    fontSize: "14px",
    color: "#6b3a50",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  headerHeart: {
    color: "#e8708a",
    fontSize: "12px",
  },
  list: {
    flex: 1,
    overflow: "auto",
  },
  entry: {
    padding: "8px 16px",
    cursor: "pointer",
    borderBottom: "1px solid #fce8ef",
    display: "flex",
    flexDirection: "column" as const,
    gap: "2px",
    transition: "background 0.1s",
  },
  entryTitle: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: "#eb80ff",
    fontSize: "13px",
  },
  entryTime: {
    fontSize: "11px",
    color: "#b8a0aa",
  },
};
