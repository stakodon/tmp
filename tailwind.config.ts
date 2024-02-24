import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      phone: "500px",
      tablet: "616px",
      sm: "631px",
      project: "800px",
      desktop: "959px",
      md: "961px",
      sign: "1100px",
      lg: "1347px",
      xl: "1983px",
      "2xl": "2355px",
    },
    container: {
      center: true,
      screens: {
        sm: "3000px",
        md: "3000px",
        lg: "3000px",
        xl: "3000px",
        "2xl": "3000px",
      },
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      1.5: "1.5px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      width: {
        104: "26rem",
      },
      spacing: {
        112: "26rem",
        100: "25rem",
      },
      flex: {
        2: "2 2 0%",
      },
      maxWidth: {
        104: "26rem",
        200: "46rem",
        300: "75rem",
      },
      minWidth: {
        104: "26rem",
        200: "46rem",
        300: "75rem",
      },
      aspectRatio: {
        "3/2": "3 / 2",
      },
      colors: {
        "regal-blue": "#243c5a",
      },
    },
  },
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [require("daisyui")],
};
export default config;
