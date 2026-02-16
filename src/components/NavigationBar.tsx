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
          style={{
            ...styles.navBtn,
            ...(!back ? styles.navBtnDisabled : {}),
          }}
          disabled={!back}
          onClick={() => dispatch({ type: "GO_BACK" })}
          aria-label="Back"
        >
          &#8592;
        </button>
        <button
          style={{
            ...styles.navBtn,
            ...(!forward ? styles.navBtnDisabled : {}),
          }}
          disabled={!forward}
          onClick={() => dispatch({ type: "GO_FORWARD" })}
          aria-label="Forward"
        >
          &#8594;
        </button>
        <button
          style={styles.navBtn}
          onClick={() => dispatch({ type: "GO_HOME" })}
          aria-label="Home"
        >
          &#8962;
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
    padding: "6px 8px",
    background: "#35363a",
  },
  buttons: {
    display: "flex",
    gap: "2px",
    flexShrink: 0,
  },
  navBtn: {
    width: "32px",
    height: "32px",
    border: "none",
    background: "transparent",
    color: "#e8eaed",
    fontSize: "18px",
    cursor: "pointer",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "inherit",
  },
  navBtnDisabled: {
    color: "#5f6368",
    cursor: "default",
  },
};
