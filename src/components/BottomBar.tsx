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
        <span>{"\u2665"} Your Story</span>
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
    background: "#fef0f4",
    border: "none",
    borderTop: "1px solid #f0c4d4",
    padding: "6px 16px",
    cursor: "pointer",
    fontSize: "12px",
    fontFamily: "inherit",
    textAlign: "left" as const,
    display: "flex",
    alignItems: "center",
    gap: "6px",
    color: "#a0607a",
  },
  toggleArrow: {
    fontSize: "8px",
  },
  bar: {
    background: "#fff5f8",
    borderTop: "1px solid #f0c4d4",
    maxHeight: "160px",
    overflow: "auto",
  },
  storyContainer: {
    padding: "12px 16px",
  },
  story: {
    fontSize: "14px",
    lineHeight: 1.8,
    color: "#807078",
  },
  filledSlot: {
    background: "#fce0e8",
    color: "#eb80ff",
    padding: "1px 6px",
    borderRadius: "4px",
    fontWeight: 600,
  },
  unfilledSlot: {
    background: "#f5e0e8",
    color: "#b8a0aa",
    padding: "1px 6px",
    borderRadius: "4px",
    fontStyle: "italic",
  },
};
