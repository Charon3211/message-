import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"],
      },
      keyframes: {
        "message-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(18px) scale(0.985)",
            filter: "blur(8px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
            filter: "blur(0)",
          },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -12px, 0)" },
        },
      },
      animation: {
        "message-in": "message-in 550ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "float-slow": "float-slow 8s ease-in-out infinite",
      },
      boxShadow: {
        soft: "0 24px 80px -32px rgba(15, 23, 42, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
