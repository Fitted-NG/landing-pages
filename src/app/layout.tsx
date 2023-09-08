import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { avenir, kotoriRose } from "@/fonts";

export const metadata: Metadata = {
  title: "Fitted.fashion",
  description: "Get excellent aso ebi for any event or group",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${avenir.className} ${kotoriRose.variable} ${avenir.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
