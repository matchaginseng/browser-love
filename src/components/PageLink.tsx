"use client";

import { PageLinkDef } from "@/types";
import { useBrowser } from "@/context/useBrowser";
import { shouldRenderLink } from "@/lib/linkConditions";

interface PageLinkProps {
  link: PageLinkDef;
}

export default function PageLink({ link }: PageLinkProps) {
  const { state, dispatch } = useBrowser();
  const visible = shouldRenderLink(link.conditions, state);

  if (!visible) return null;

  return (
    <a
      href="#"
      className="page-link"
      onClick={(e) => {
        e.preventDefault();
        dispatch({
          type: "NAVIGATE_TO_PAGE",
          payload: { pageId: link.targetPageId },
        });
      }}
      style={styles.link}
    >
      {link.label}
    </a>
  );
}

const styles: Record<string, React.CSSProperties> = {
  link: {
    display: "block",
    padding: "3px 0",
    fontSize: "14px",
  },
};
