"use client";

import { initializePages } from "@/content/pages";
import TabBar from "./TabBar";
import NavigationBar from "./NavigationBar";
import Viewport from "./Viewport";
import Sidebar from "./Sidebar";
import BottomBar from "./BottomBar";
import LoveCounter from "./LoveCounter";

initializePages();

export default function BrowserShell() {
  return (
    <div style={styles.desktop}>
      <div style={styles.window}>
        <TabBar />
        <NavigationBar />
        <div style={styles.contentArea}>
          <Sidebar />
          <Viewport />
          <LoveCounter />
        </div>
        <BottomBar />
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  desktop: {
    width: "100vw",
    height: "100vh",
    background: "#1a0d12",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0",
  },
  window: {
    width: "92%",
    height: "90%",
    maxWidth: "1100px",
    maxHeight: "800px",
    background: "#2d1520",
    borderRadius: "8px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column" as const,
    boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
  },
  contentArea: {
    flex: 1,
    display: "flex",
    position: "relative" as const,
    overflow: "hidden",
  },
};
