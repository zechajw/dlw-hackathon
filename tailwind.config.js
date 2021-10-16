const { classicNameResolver } = require("typescript");

/* eslint-disable no-unused-vars */
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        almost: "calc(100vh - 8rem)",
      },
      fontFamily: {
        lato: "'Lato', 'sans-serif'",
      },
      gradientColorStops: (theme) => ({
        aidark: "#1f040f",
        aipink: "#a31648",
      }),
      colors: {
        ai: {
          DEFAULT: "#A31648",
          50: "#F4ABC5",
          100: "#F194B5",
          200: "#EB6796",
          300: "#E43B77",
          400: "#D01C5C",
          500: "#A31648",
          600: "#761034",
          700: "#490A20",
          800: "#1C040C",
          900: "#000000",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
