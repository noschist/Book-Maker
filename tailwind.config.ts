import type { Config } from "tailwindcss";

interface Keyframes {
  [key: string]: {
    [percentage: string]: {
      opacity: number;
      transform: string;
    };
  };
}


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          '0%': {
            opacity: '0',
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          '100%': {
            opacity: '1',
            transform: "translate(-50%, -40%) scale(1)",
          },
        },
      }
    },
  },
  plugins: [],
};

export default config;
