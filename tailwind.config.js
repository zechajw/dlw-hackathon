module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        lato: "'Lato', 'sans-serif'",
      },
      colors: {
        ai: {
          DEFAULT: "#E81F68",
          50: "#FDEFF4",
          100: "#FBD8E5",
          200: "#F6AAC6",
          300: "#F17CA6",
          400: "#ED4D87",
          500: "#E81F68",
          600: "#C01452",
          700: "#920F3F",
          800: "#640A2B",
          900: "#360517",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
