import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "common-white": "var(--common-white)",
        "common-black": "var(--common-black)",
        "theme-primary": "var(--theme-primary)",
        "theme-secondary": "var(--theme-secondary)",
        "body-text": "var(--body-text)",
        "body-heading": "var(--body-heading)",
        "heading-black": "var(--heading-black)",
        "light-white": "var(--light-white)",
        "light-white-2": "var(--light-white-2)",
        "light-black": "var(--light-black)",
        "common-gray": "var(--common-gray)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        ":root": {
          "--common-white": "#fff",
          "--common-white-two": "#fff",
          "--common-black": "#000",
          "--theme-primary": "#1b74e4",
          "--theme-secondary": "#fa5252",
          "--body-text": "#44566c",
          "--body-heading": "#000",
          "--heading-black": "#0f172a",
          "--light-white": "#f3f6f6",
          "--light-white-2": "#f8fbfb",
          "--light-black": "#f3f6f6",
          "--common-gray": "#edf2f7",
        },
        ".dark-theme": {
          "--common-white": "#000",
          "--common-black": "#fff",
          "--theme-primary": "#1b74e4",
          "--theme-secondary": "#fa5252",
          "--body-text": "#a6a6a6",
          "--body-heading": "#fff",
          "--heading-black": "#0f172a",
          "--light-white": "#f3f6f6",
          "--light-white-2": "#f8fbfb",
          "--light-black": "#1d1d1d;",
          "--common-gray": "#2d3748",
        },
      });
    }),
    require("daisyui"),
  ],
};
export default config;
