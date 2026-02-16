// ─── Page Identity ───

export type PageId = string;

// ─── Content Types ───

export interface LinkCondition {
  type:
    | "visited"
    | "not_visited"
    | "visited_count_gte"
    | "has_keyword"
    | "tab_count_gte"
    | "always";
  target?: PageId | string;
  value?: number;
}

export interface PageLinkDef {
  label: string;
  targetPageId: PageId;
  conditions: LinkCondition[];
}

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; level: 1 | 2 | 3 }
  | { type: "image"; src: string; alt: string }
  | { type: "link_group"; links: PageLinkDef[] }
  | { type: "hr" }
  | { type: "html"; content: string }
  | {
      type: "guestbook";
      entries: Array<{ name: string; message: string; date: string }>;
    }
  | { type: "visitor_counter"; count: number };

// ─── Ad-Lib Types ───

export interface AdlibKeyword {
  slot: string;
  word: string;
  priority?: number;
}

// ─── Page Definition ───

export interface PageDefinition {
  id: PageId;
  urlKeywords: string[];
  tabTitle: string;
  content: ContentBlock[];
  adlibKeywords: AdlibKeyword[];
  inboundFrom?: PageId[];
  outboundTo?: PageId[];
}

// ─── Tab & Navigation ───

export interface TabState {
  id: string;
  historyStack: PageId[];
  historyIndex: number;
  currentPageId: PageId;
}

// ─── Global Browser State ───

export interface BrowserState {
  tabs: TabState[];
  activeTabId: string;
  clickHistory: Array<{ pageId: PageId; timestamp: number }>;
  visitedPages: Record<PageId, true>;
  adlibSlots: Record<string, string>;
  sidebarOpen: boolean;
  bottomBarOpen: boolean;
}
