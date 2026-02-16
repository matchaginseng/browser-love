"use client";

import { useBrowser } from "@/context/useBrowser";
import { getCurrentPageId } from "@/lib/navigation";
import PageRenderer from "./PageRenderer";

export default function Viewport() {
  const { state } = useBrowser();
  const pageId = getCurrentPageId(state);

  return (
    <div style={styles.viewport}>
      <PageRenderer pageId={pageId} />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  viewport: {
    flex: 1,
    overflow: "auto",
    background: "#ffffff",
    border: "2px solid",
    borderColor: "#808080 #ffffff #ffffff #808080",
    boxShadow: "inset 1px 1px 0 #000000, inset -1px -1px 0 #dfdfdf",
  },
};
