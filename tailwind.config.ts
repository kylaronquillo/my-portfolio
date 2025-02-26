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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        stinger: ['Stinger', 'sans-serif'],
        hagrid: ['Hagrid', 'sans-serif'],
        harmattan: ['Harmattan', 'sans-serif'],
        stingerbold: ['Stinger-Bold', 'sans-serif'],
      },      
    },
  },
  plugins: [],
};
export default config;
