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
        "pink-fitted": "#B7076B",
        "main-purple": "#B7076B",
        "dark-text": "#344054",
        "light-cream": "#FAF9F9",
        "main-blue": "#5773FF"
      },
      keyframes: {
        carousel: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-4774px)" },
        },
        "brands-carousel": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-1808px)" },
        },
        "fade-in": {
          "0%": { opacity: "0.5", scale: "1.05" },
          "100%": { opacity: "1", scale: "1.0" },
        },
      },
      animation: {
        carousel: "carousel 30s infinite linear",
        "brands-carousel": "brands-carousel 20s infinite linear",
        "fade-in": "fade-in 2s 1 ease-in",
      },
    },
  },
  plugins: [],
};
export default config;
