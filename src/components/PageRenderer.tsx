"use client";

import { PageId, ContentBlock } from "@/types";
import { getPageDefinition } from "@/content/registry";
import PageLink from "./PageLink";

interface PageRendererProps {
  pageId: PageId;
}

export default function PageRenderer({ pageId }: PageRendererProps) {
  const page = getPageDefinition(pageId);

  if (!page) {
    return (
      <div style={styles.error}>
        <h1 style={styles.errorTitle}>404 - Page Not Found</h1>
        <p>The page &quot;{pageId}&quot; could not be found on this server.</p>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      {page.content.map((block, i) => (
        <ContentBlockRenderer key={i} block={block} />
      ))}
    </div>
  );
}

function ContentBlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p style={styles.paragraph}>{block.text}</p>;

    case "heading": {
      if (block.level === 1) return <h1 style={styles.h1}>{block.text}</h1>;
      if (block.level === 2) return <h2 style={styles.h2}>{block.text}</h2>;
      return <h3 style={styles.h3}>{block.text}</h3>;
    }

    case "image":
      return (
        <div style={styles.imageWrapper}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={block.src} alt={block.alt} style={styles.image} />
        </div>
      );

    case "link_group":
      return (
        <div style={styles.linkGroup}>
          {block.links.map((link, i) => (
            <PageLink key={i} link={link} />
          ))}
        </div>
      );

    case "hr":
      return <hr style={styles.hr} />;

    case "html":
      return (
        <div
          dangerouslySetInnerHTML={{ __html: block.content }}
          style={styles.htmlBlock}
        />
      );

    case "guestbook":
      return (
        <div style={styles.guestbook}>
          {block.entries.map((entry, i) => (
            <div key={i} style={styles.guestbookEntry}>
              <div style={styles.guestbookHeader}>
                <strong>{entry.name}</strong>
                <span style={styles.guestbookDate}>{entry.date}</span>
              </div>
              <p style={styles.guestbookMessage}>{entry.message}</p>
            </div>
          ))}
        </div>
      );

    case "visitor_counter":
      return (
        <div style={styles.visitorCounter}>
          <span style={styles.counterLabel}>You are visitor #</span>
          <span style={styles.counterNumber}>
            {block.count.toLocaleString()}
          </span>
        </div>
      );

    default:
      return null;
  }
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    padding: "16px",
  },
  paragraph: {
    marginBottom: "12px",
    lineHeight: 1.6,
  },
  h1: {
    fontSize: "24px",
    marginBottom: "12px",
    textAlign: "center" as const,
  },
  h2: {
    fontSize: "20px",
    marginBottom: "8px",
  },
  h3: {
    fontSize: "18px",
    marginBottom: "6px",
  },
  imageWrapper: {
    textAlign: "center" as const,
    margin: "12px 0",
  },
  image: {
    maxWidth: "100%",
    imageRendering: "pixelated" as const,
  },
  linkGroup: {
    margin: "12px 0",
    display: "flex",
    flexDirection: "column" as const,
    gap: "4px",
  },
  hr: {
    border: "none",
    borderTop: "2px solid #808080",
    borderBottom: "2px solid #ffffff",
    margin: "16px 0",
  },
  htmlBlock: {
    margin: "12px 0",
  },
  guestbook: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "12px",
    margin: "12px 0",
  },
  guestbookEntry: {
    border: "1px solid #808080",
    padding: "8px",
    background: "#f0f0f0",
  },
  guestbookHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "4px",
    fontSize: "14px",
  },
  guestbookDate: {
    color: "#808080",
    fontSize: "12px",
  },
  guestbookMessage: {
    fontSize: "14px",
  },
  visitorCounter: {
    textAlign: "center" as const,
    margin: "8px 0",
    padding: "4px 12px",
    background: "#000000",
    color: "#00ff00",
    display: "inline-block",
    border: "2px solid #808080",
  },
  counterLabel: {
    fontSize: "14px",
  },
  counterNumber: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  error: {
    padding: "32px",
    textAlign: "center" as const,
  },
  errorTitle: {
    fontSize: "24px",
    marginBottom: "16px",
  },
};
