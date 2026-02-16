import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";
import { BrowserProvider } from "@/context/BrowserContext";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Internet Explorer - Y2K",
  description: "A Y2K browser simulation game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={vt323.variable}>
      <body>
        <BrowserProvider>{children}</BrowserProvider>
      </body>
    </html>
  );
}
