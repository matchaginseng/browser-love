"use client";

import { useBrowser } from "@/context/useBrowser";
import { renderStory, storyTemplate } from "@/content/adlib";

export default function BottomBar() {
  const { state, dispatch } = useBrowser();
  const segments = renderStory(storyTemplate, state.adlibSlots);

  return (
    <>
      <button
        onClick={() => dispatch({ type: "TOGGLE_BOTTOM_BAR" })}
        style={styles.toggle}
        aria-label={state.bottomBarOpen ? "Close story" : "Open story"}
      >
        {state.bottomBarOpen ? "▼" : "▲"} Your Story
      </button>
      {state.bottomBarOpen && (
        <div style={styles.bar}>
          <div style={styles.header}>
            <span style={styles.headerIcon}>📖</span>
            <strong>Your Adventure So Far...</strong>
          </div>
          <div style={styles.storyContainer}>
            <p style={styles.story}>
              {segments.map((seg, i) => {
                if (seg.type === "text") {
                  return <span key={i}>{seg.value}</span>;
                }
                if (seg.type === "filled") {
                  return (
                    <span key={i} style={styles.filledSlot}>
                      {seg.value}
                    </span>
                  );
                }
                return (
                  <span key={i} style={styles.unfilledSlot}>
                    {seg.value}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  toggle: {
    width: "100%",
    background: "#c0c0c0",
    border: "2px solid",
    borderColor: "#ffffff #000000 #000000 #ffffff",
    borderBottom: "none",
    padding: "2px 8px",
    cursor: "pointer",
    fontSize: "12px",
    fontFamily: "inherit",
    textAlign: "left" as const,
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
  bar: {
    background: "#ffffcc",
    borderTop: "2px solid #808080",
    maxHeight: "160px",
    overflow: "auto",
  },
  header: {
    padding: "4px 8px",
    borderBottom: "1px solid #808080",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    fontSize: "13px",
    background: "#c0c0c0",
  },
  headerIcon: {
    fontSize: "12px",
  },
  storyContainer: {
    padding: "8px 12px",
  },
  story: {
    fontSize: "15px",
    lineHeight: 1.8,
  },
  filledSlot: {
    background: "#00ff00",
    color: "#000080",
    padding: "1px 4px",
    fontWeight: "bold",
    border: "1px solid #008000",
  },
  unfilledSlot: {
    background: "#ff0",
    color: "#808080",
    padding: "1px 4px",
    fontStyle: "italic",
    border: "1px dashed #808080",
  },
};
