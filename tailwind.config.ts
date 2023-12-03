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
          "0%": { opacity: "0", scale: "1.2" },
          "15%": { opacity: "1", scale: "1.1" },
          "60%": { opacity: "0.8", scale: "1.0" },
          "70%": { opacity: "0", scale: "1.0" },
        },
        "fade-down": {
          "0%": { opacity: "0", transform: "translateY(-100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-down2": {
          "0%": { opacity: "0", transform: "translateY(-150%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-down3": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-up": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-100%)" },
        },
        "show-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        carousel: "carousel 45s infinite linear",
        "brands-carousel": "brands-carousel 30s infinite linear",
        "fade-in": "fade-in 20s infinite linear",
        "fade-down": "fade-down 0.8s ease-in forwards",
        "fade-down2": "fade-down2 0.8s ease-in 0.8s forwards",
        "fade-down3": "fade-down3 0.8s ease-in 1.6s forwards",
        "fade-up": "fade-up 1s ease-out 4s forwards",
        "show-in": "show-in 0.5s linear 4.8s forwards",
      },
      backgroundImage: {
        "splash-screen": "url('/magic-tag_splash-screen.png')",
      },
    },
  },
  plugins: [],
};
export default config;
