import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#800000", // Deep Maroon
          light: "#a32626",
          dark: "#590000",
        },
        secondary: {
          DEFAULT: "#F47B20", // Saffron Orange
          light: "#fc9a4c",
          dark: "#c75c00",
        },
        accent: {
          DEFAULT: "#FFC000", // Golden Yellow
          light: "#ffd64d",
          dark: "#cc9a00",
        },
        cream: {
          DEFAULT: "#FDFBF7", // Light Cream for section backgrounds
        }
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
