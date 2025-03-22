import type { Config } from 'tailwindcss';

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50", // Green (Button & accents)
        secondary: "#E5E7EB", // Light Gray (Background)
        accent: "#1E293B", // Dark Gray (Text & Icons)
        cardBg: "#FFFFFF", // White (Cards)
        border: "#D1D5DB", // Gray (Borders)
        hover: "#F3F4F6", // Light Gray (Hover effects)
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], 
      },

      boxShadow: {
        card: "0px 4px 6px rgba(0, 0, 0, 0.1)", // shadow for cards
      },
    },
  },
  plugins: [],
};

export default config;
