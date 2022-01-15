module.exports = {
  content: ["./pages/**/*.{html,tsx}", "./components/**/*.{html,tsx}"],
  darkmode: false,
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    screens: {
      xxsm: "160px",
      xsm: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "3440px",
    },
    extend: {
      fontFamily: {
        sans: ["Catamaran", "sans-serif"],
      },
    },
  },
};
