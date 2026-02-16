"use client";

import React, { createContext, useReducer, ReactNode } from "react";
import { BrowserState } from "@/types";
import { browserReducer, BrowserAction, generateTabId } from "./browserReducer";

export interface BrowserContextValue {
  state: BrowserState;
  dispatch: React.Dispatch<BrowserAction>;
}

export const BrowserContext = createContext<BrowserContextValue | null>(null);

const HOME_PAGE_ID = "home";
const initialTabId = generateTabId();

const initialState: BrowserState = {
  tabs: [
    {
      id: initialTabId,
      historyStack: [HOME_PAGE_ID],
      historyIndex: 0,
      currentPageId: HOME_PAGE_ID,
    },
  ],
  activeTabId: initialTabId,
  clickHistory: [{ pageId: HOME_PAGE_ID, timestamp: Date.now() }],
  visitedPages: { [HOME_PAGE_ID]: true },
  adlibSlots: {},
  sidebarOpen: false,
  bottomBarOpen: false,
};

export function BrowserProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(browserReducer, initialState);

  return (
    <BrowserContext.Provider value={{ state, dispatch }}>
      {children}
    </BrowserContext.Provider>
  );
}
