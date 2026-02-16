"use client";

import { useBrowser } from "@/context/useBrowser";
import { canGoBack, canGoForward, getActiveTab } from "@/lib/navigation";
import { getPageDefinition } from "@/content/registry";
import UrlBar from "./UrlBar";

export default function NavigationBar() {
  const { state, dispatch } = useBrowser();
  const back = canGoBack(state);
  const forward = canGoForward(state);
  const activeTab = getActiveTab(state);
  const page = getPageDefinition(activeTab.currentPageId);
  const keywords = page?.urlKeywords ?? ["unknown"];

  return (
    <div style={styles.navBar}>
      <div style={styles.buttons}>
        <button
          className="win98-button"
          disabled={!back}
          onClick={() => dispatch({ type: "GO_BACK" })}
          aria-label="Back"
        >
          ◀ Back
        </button>
        <button
          className="win98-button"
          disabled={!forward}
          onClick={() => dispatch({ type: "GO_FORWARD" })}
          aria-label="Forward"
        >
          Forward ▶
        </button>
        <button
          className="win98-button"
          onClick={() => dispatch({ type: "GO_HOME" })}
          aria-label="Home"
        >
          🏠 Home
        </button>
      </div>
      <UrlBar keywords={keywords} />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  navBar: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "4px 6px",
    background: "#c0c0c0",
    borderBottom: "2px solid",
    borderBottomColor: "#808080",
  },
  buttons: {
    display: "flex",
    gap: "4px",
    flexShrink: 0,
  },
};
