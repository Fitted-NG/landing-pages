import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        avenir: ["var(--font-avenir)"],
        "kotori-rose": ["var(--font-kotori-rose)"],
      },
      colors: {
        "main-purple": "#B7076B",
        "dark-text": "#344054",
        "light-cream": "#FAF9F9",
      },
      keyframes: {
        carousel1: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-2362px)" },
        },
        carousel2: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-2412px)" },
        },
        "brands-carousel": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-1248px)" },
        },
        "fade-in": {
          "0%": { opacity: "0.5", scale: "1.05" },
          "100%": { opacity: "1", scale: "1.0" },
        },
      },
      animation: {
        carousel1: "carousel1 20s infinite linear",
        carousel2: "carousel2 20s infinite linear reverse",
        "brands-carousel": "brands-carousel 15s infinite linear",
        "fade-in": "fade-in 2s 1 ease-in",
      },
    },
  },
  plugins: [],
};
export default config;
