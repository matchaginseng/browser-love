"use client";

import { initializePages } from "@/content/pages";
import TitleBar from "./TitleBar";
import TabBar from "./TabBar";
import NavigationBar from "./NavigationBar";
import Viewport from "./Viewport";
import Sidebar from "./Sidebar";
import BottomBar from "./BottomBar";
import StatusBar from "./StatusBar";

// Register all pages at module load time so they're available for first render
initializePages();

export default function BrowserShell() {

  return (
    <div style={styles.desktop}>
      <div style={styles.window}>
        <TitleBar />
        <TabBar />
        <NavigationBar />
        <div style={styles.contentArea}>
          <Sidebar />
          <Viewport />
        </div>
        <BottomBar />
        <StatusBar />
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  desktop: {
    width: "100vw",
    height: "100vh",
    background: "#008080",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px",
  },
  window: {
    width: "100%",
    maxWidth: "960px",
    height: "100%",
    maxHeight: "720px",
    background: "#c0c0c0",
    border: "2px solid",
    borderColor: "#ffffff #000000 #000000 #ffffff",
    boxShadow: "inset 1px 1px 0 #dfdfdf, inset -1px -1px 0 #808080",
    display: "flex",
    flexDirection: "column" as const,
    overflow: "hidden",
  },
  contentArea: {
    flex: 1,
    display: "flex",
    position: "relative" as const,
    overflow: "hidden",
  },
};
