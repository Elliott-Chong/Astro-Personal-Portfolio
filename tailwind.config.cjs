const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        spacemono: ["Space Mono", ...defaultTheme.fontFamily.mono],
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "terminal-green": "#01f53f",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
