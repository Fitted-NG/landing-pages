import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { avenir, kotoriRose } from "@/fonts";
import { ThemeProvider } from "@/contexts/ThemeContext";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Fitted Fashion",
  description:
    "Step into the digital era of fashion. Exceptional tailor-made outfits, crafted exclusively for customers with AI and blockchain",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${avenir.className} ${kotoriRose.variable} ${avenir.variable}`}
      >
        <GoogleAnalytics />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
