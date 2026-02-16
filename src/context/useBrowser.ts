"use client";

import { useContext } from "react";
import { BrowserContext } from "./BrowserContext";

export function useBrowser() {
  const context = useContext(BrowserContext);
  if (!context) {
    throw new Error("useBrowser must be used within a BrowserProvider");
  }
  return context;
}
