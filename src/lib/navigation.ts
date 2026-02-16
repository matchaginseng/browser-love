import { BrowserState, TabState, PageId } from "@/types";

export function getActiveTab(state: BrowserState): TabState {
  const tab = state.tabs.find((t) => t.id === state.activeTabId);
  if (!tab) throw new Error(`Active tab ${state.activeTabId} not found`);
  return tab;
}

export function canGoBack(state: BrowserState): boolean {
  const tab = getActiveTab(state);
  return tab.historyIndex > 0;
}

export function canGoForward(state: BrowserState): boolean {
  const tab = getActiveTab(state);
  return tab.historyIndex < tab.historyStack.length - 1;
}

export function getCurrentPageId(state: BrowserState): PageId {
  return getActiveTab(state).currentPageId;
}
