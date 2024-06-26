import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-custom": "#ADF43A",
        "green-neon": "#90DD04",
        "gray-custom": "#35393C",
        "blue-custom": "#101519",
        "background": "#070A0F",
      } 
    },
  },
  plugins: [],
};
export default config;
