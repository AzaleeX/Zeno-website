import {nextui} from "@nextui-org/react";
const defaultTheme = require("tailwindcss/defaultTheme");
const svgToDataUri = require("mini-svg-data-uri");
const colors = require("tailwindcss/colors");
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {
        disabledOpacity: "0.3", // opacity-[0.3]
        radius: {
          small: "4px", // rounded-small
          medium: "6px", // rounded-medium
          large: "8px", // rounded-large
        },
        borderWidth: {
          small: "1px", // border-small
          medium: "2px", // border-medium
          large: "3px", // border-large
        },
      },
      themes: {
        light: {},
        dark: {},
      },
    }),
      addVariablesForColors,
      function ({ matchUtilities, theme }) {
          matchUtilities(
              {
                  "bg-grid": (value) => ({
                      backgroundImage: `url("${svgToDataUri(
                          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
                      )}")`,
                  }),
                  "bg-grid-small": (value) => ({
                      backgroundImage: `url("${svgToDataUri(
                          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
                      )}")`,
                  }),
                  "bg-dot": (value) => ({
                      backgroundImage: `url("${svgToDataUri(
                          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
                      )}")`,
                  }),
              },
              { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
          );
      },
  ],
};
function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}

