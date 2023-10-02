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
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        avenir: ["var(--font-avenir)"],
        "kotori-rose": ["var(--font-kotori-rose)"],
      },
      colors: {
        "pink-fitted": "#B7076B",
        dark: "#344054",
        "cream-fitted": "#FAF9F9",
        "blue-fitted": "#5773FF",
        "dark-tab": "#18181A",
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
          "15%": { opacity: "1", scale: "1.1" },
          "60%": { opacity: "0.8", scale: "1.0" },
          "70%": { opacity: "0", scale: "1.0" },
        },
      },
      animation: {
        carousel: "carousel 45s infinite linear",
        "brands-carousel": "brands-carousel 30s infinite linear",
        "fade-in": "fade-in 14s infinite linear",
      },
    },
  },
  plugins: [],
};
export default config;
