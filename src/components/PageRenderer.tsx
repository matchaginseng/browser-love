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
        <h1 style={styles.errorTitle}>404</h1>
        <p style={styles.errorText}>
          The page &quot;{pageId}&quot; could not be found.
        </p>
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
          <span style={styles.counterLabel}>Visitors: </span>
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
    padding: "24px 32px",
    maxWidth: "800px",
  },
  paragraph: {
    marginBottom: "12px",
    lineHeight: 1.7,
    color: "#202124",
    fontSize: "14px",
  },
  h1: {
    fontSize: "24px",
    fontWeight: 400,
    marginBottom: "16px",
    color: "#202124",
  },
  h2: {
    fontSize: "18px",
    fontWeight: 600,
    marginBottom: "12px",
    color: "#202124",
  },
  h3: {
    fontSize: "16px",
    fontWeight: 600,
    marginBottom: "8px",
    color: "#202124",
  },
  imageWrapper: {
    margin: "16px 0",
  },
  image: {
    maxWidth: "100%",
    borderRadius: "4px",
  },
  linkGroup: {
    margin: "12px 0",
    display: "flex",
    flexDirection: "column" as const,
    gap: "6px",
  },
  hr: {
    border: "none",
    borderTop: "1px solid #dadce0",
    margin: "20px 0",
  },
  htmlBlock: {
    margin: "12px 0",
  },
  guestbook: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "8px",
    margin: "12px 0",
  },
  guestbookEntry: {
    border: "1px solid #dadce0",
    borderRadius: "8px",
    padding: "12px 16px",
    background: "#f8f9fa",
  },
  guestbookHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "4px",
    fontSize: "13px",
  },
  guestbookDate: {
    color: "#9aa0a6",
    fontSize: "12px",
  },
  guestbookMessage: {
    fontSize: "13px",
    color: "#5f6368",
  },
  visitorCounter: {
    margin: "8px 0",
    padding: "6px 12px",
    background: "#f1f3f4",
    borderRadius: "4px",
    display: "inline-block",
    fontSize: "13px",
    color: "#5f6368",
  },
  counterLabel: {
    fontSize: "13px",
  },
  counterNumber: {
    fontWeight: 600,
  },
  error: {
    padding: "64px 32px",
    textAlign: "center" as const,
  },
  errorTitle: {
    fontSize: "48px",
    fontWeight: 200,
    color: "#202124",
    marginBottom: "16px",
  },
  errorText: {
    color: "#5f6368",
    fontSize: "14px",
  },
};
