import type { Metadata } from "next";
import { Familjen_Grotesk, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { BrowserProvider } from "@/context/BrowserContext";

const familjenGrotesk = Familjen_Grotesk({
  subsets: ["latin"],
  variable: "--font-familjen",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
      className={`${familjenGrotesk.variable} ${cormorantGaramond.variable}`}
    >
      <body>
        <BrowserProvider>{children}</BrowserProvider>
      </body>
    </html>
  );
}
