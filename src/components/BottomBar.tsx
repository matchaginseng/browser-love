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
        <span style={styles.toggleArrow}>
          {state.bottomBarOpen ? "\u25BC" : "\u25B2"}
        </span>
        <span>Your Story</span>
      </button>
      {state.bottomBarOpen && (
        <div style={styles.bar}>
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
    background: "#f8f9fa",
    border: "none",
    borderTop: "1px solid #dadce0",
    padding: "6px 16px",
    cursor: "pointer",
    fontSize: "12px",
    fontFamily: "inherit",
    textAlign: "left" as const,
    display: "flex",
    alignItems: "center",
    gap: "6px",
    color: "#5f6368",
  },
  toggleArrow: {
    fontSize: "8px",
  },
  bar: {
    background: "#ffffff",
    borderTop: "1px solid #dadce0",
    maxHeight: "160px",
    overflow: "auto",
  },
  storyContainer: {
    padding: "12px 16px",
  },
  story: {
    fontSize: "14px",
    lineHeight: 1.8,
    color: "#202124",
  },
  filledSlot: {
    background: "#e8f0fe",
    color: "#1a73e8",
    padding: "1px 6px",
    borderRadius: "4px",
    fontWeight: 600,
  },
  unfilledSlot: {
    background: "#f1f3f4",
    color: "#9aa0a6",
    padding: "1px 6px",
    borderRadius: "4px",
    fontStyle: "italic",
  },
};
