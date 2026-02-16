import { BrowserState, PageId, TabState, AdlibKeyword } from "@/types";
import { getPageDefinition } from "@/content/registry";

// ─── Action Types ───

export type BrowserAction =
  | { type: "NAVIGATE_TO_PAGE"; payload: { pageId: PageId } }
  | { type: "OPEN_NEW_TAB"; payload: { pageId: PageId } }
  | { type: "CLOSE_TAB"; payload: { tabId: string } }
  | { type: "SWITCH_TAB"; payload: { tabId: string } }
  | { type: "GO_BACK" }
  | { type: "GO_FORWARD" }
  | { type: "GO_HOME" }
  | { type: "TOGGLE_SIDEBAR" }
  | { type: "TOGGLE_BOTTOM_BAR" };

function generateTabId(): string {
  return `tab-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

function getActiveTab(state: BrowserState): TabState {
  return state.tabs.find((t) => t.id === state.activeTabId)!;
}

function replaceActiveTab(
  state: BrowserState,
  updatedTab: TabState,
): TabState[] {
  return state.tabs.map((t) =>
    t.id === state.activeTabId ? updatedTab : t,
  );
}

function collectAdlibKeywords(
  currentSlots: Record<string, string>,
  pageId: PageId,
): Record<string, string> {
  const page = getPageDefinition(pageId);
  if (!page) return currentSlots;

  const newSlots = { ...currentSlots };
  for (const kw of page.adlibKeywords) {
    if (!(kw.slot in newSlots) || (kw.priority ?? 0) > 0) {
      newSlots[kw.slot] = kw.word;
    }
  }
  return newSlots;
}

export { generateTabId };

export function browserReducer(
  state: BrowserState,
  action: BrowserAction,
): BrowserState {
  switch (action.type) {
    case "NAVIGATE_TO_PAGE": {
      const { pageId } = action.payload;
      const activeTab = getActiveTab(state);
      const truncatedHistory = activeTab.historyStack.slice(
        0,
        activeTab.historyIndex + 1,
      );
      const newHistory = [...truncatedHistory, pageId];
      const newIndex = newHistory.length - 1;

      const updatedTab: TabState = {
        ...activeTab,
        historyStack: newHistory,
        historyIndex: newIndex,
        currentPageId: pageId,
      };

      return {
        ...state,
        tabs: replaceActiveTab(state, updatedTab),
        clickHistory: [
          ...state.clickHistory,
          { pageId, timestamp: Date.now() },
        ],
        visitedPages: { ...state.visitedPages, [pageId]: true as const },
        adlibSlots: collectAdlibKeywords(state.adlibSlots, pageId),
      };
    }

    case "OPEN_NEW_TAB": {
      const { pageId } = action.payload;

      // If a tab is already showing this page, switch to it instead
      const existingTab = state.tabs.find(
        (t) => t.currentPageId === pageId,
      );
      if (existingTab) {
        return {
          ...state,
          activeTabId: existingTab.id,
          clickHistory: [
            ...state.clickHistory,
            { pageId, timestamp: Date.now() },
          ],
        };
      }

      const newTabId = generateTabId();
      const newTab: TabState = {
        id: newTabId,
        historyStack: [pageId],
        historyIndex: 0,
        currentPageId: pageId,
      };

      return {
        ...state,
        tabs: [...state.tabs, newTab],
        activeTabId: newTabId,
        clickHistory: [
          ...state.clickHistory,
          { pageId, timestamp: Date.now() },
        ],
        visitedPages: { ...state.visitedPages, [pageId]: true as const },
        adlibSlots: collectAdlibKeywords(state.adlibSlots, pageId),
      };
    }

    case "CLOSE_TAB": {
      const { tabId } = action.payload;
      const remainingTabs = state.tabs.filter((t) => t.id !== tabId);

      if (remainingTabs.length === 0) {
        const freshTabId = generateTabId();
        return {
          ...state,
          tabs: [
            {
              id: freshTabId,
              historyStack: ["home"],
              historyIndex: 0,
              currentPageId: "home",
            },
          ],
          activeTabId: freshTabId,
        };
      }

      let newActiveId = state.activeTabId;
      if (tabId === state.activeTabId) {
        const closedIndex = state.tabs.findIndex((t) => t.id === tabId);
        const newIndex = Math.min(closedIndex, remainingTabs.length - 1);
        newActiveId = remainingTabs[newIndex].id;
      }

      return {
        ...state,
        tabs: remainingTabs,
        activeTabId: newActiveId,
      };
    }

    case "SWITCH_TAB": {
      return {
        ...state,
        activeTabId: action.payload.tabId,
      };
    }

    case "GO_BACK": {
      const activeTab = getActiveTab(state);
      if (activeTab.historyIndex <= 0) return state;

      const newIndex = activeTab.historyIndex - 1;
      const pageId = activeTab.historyStack[newIndex];

      return {
        ...state,
        tabs: replaceActiveTab(state, {
          ...activeTab,
          historyIndex: newIndex,
          currentPageId: pageId,
        }),
      };
    }

    case "GO_FORWARD": {
      const activeTab = getActiveTab(state);
      if (activeTab.historyIndex >= activeTab.historyStack.length - 1)
        return state;

      const newIndex = activeTab.historyIndex + 1;
      const pageId = activeTab.historyStack[newIndex];

      return {
        ...state,
        tabs: replaceActiveTab(state, {
          ...activeTab,
          historyIndex: newIndex,
          currentPageId: pageId,
        }),
      };
    }

    case "GO_HOME": {
      const activeTab = getActiveTab(state);
      const truncatedHistory = activeTab.historyStack.slice(
        0,
        activeTab.historyIndex + 1,
      );
      const newHistory = [...truncatedHistory, "home"];

      return {
        ...state,
        tabs: replaceActiveTab(state, {
          ...activeTab,
          historyStack: newHistory,
          historyIndex: newHistory.length - 1,
          currentPageId: "home",
        }),
      };
    }

    case "TOGGLE_SIDEBAR": {
      return { ...state, sidebarOpen: !state.sidebarOpen };
    }

    case "TOGGLE_BOTTOM_BAR": {
      return { ...state, bottomBarOpen: !state.bottomBarOpen };
    }

    default:
      return state;
  }
}
