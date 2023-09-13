import localFont from "next/font/local";

export const kotoriRose = localFont({
  variable: "--font-kotori-rose",
  src: [
    {
      path: "./Kotori_Rose/KotoriRose-Bold 700.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Kotori_Rose/KotoriRose-Regular 400.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const avenir = localFont({
  variable: "--font-avenir",
  src: [
    {
      path: "./Avenir Next LT Pro/26301410506.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Avenir Next LT Pro/25728576873.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./Avenir Next LT Pro/25381880192.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});
