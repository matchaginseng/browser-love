import type { Metadata } from "next";
import { Familjen_Grotesk, Tiny5 } from "next/font/google";
import "./globals.css";
import { BrowserProvider } from "@/context/BrowserContext";

const familjenGrotesk = Familjen_Grotesk({
  subsets: ["latin"],
  variable: "--font-familjen",
  display: "swap",
});

const tiny5 = Tiny5({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Browser",
  description: "A browser simulation game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${familjenGrotesk.variable} ${tiny5.variable}`}
    >
      <body>
        <BrowserProvider>{children}</BrowserProvider>
      </body>
    </html>
  );
}
