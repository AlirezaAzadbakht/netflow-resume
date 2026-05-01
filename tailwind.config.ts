import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
        ink: {
          900: "#0f0a1e",
          800: "#1c1733",
          700: "#2a2347",
          500: "#5b5277",
          300: "#b1aac8",
        },
        paper: {
          DEFAULT: "#fbfaff",
          soft: "#f5f3ff",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        fa: [
          "Iranian Sans",
          "IranianSans",
          "Vazirmatn",
          "Tahoma",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow:
          "0 0 0 1px rgba(124, 58, 237, 0.12), 0 18px 40px -12px rgba(124, 58, 237, 0.25)",
        "glow-strong":
          "0 0 0 1px rgba(124, 58, 237, 0.25), 0 30px 60px -15px rgba(124, 58, 237, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
