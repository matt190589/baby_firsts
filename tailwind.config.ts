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
        "bf-pink": "#ffb2b8",
        "bf-navy": "#4c597c",
        "bf-light-blue": "#a0dce0",
        "bf-light-skin": "##ffc9af",
        "bf-off-white": "#ece9e6",
      }
    },
  },
  plugins: [],
};
export default config;
