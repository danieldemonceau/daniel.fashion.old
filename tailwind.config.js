module.exports = {
  content: ["./src/pages/**/*.{html,tsx}", "./src/components/**/*.{html,tsx}"],
  darkmode: false,
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
    container: { center: true, padding: "2rem" },
    extend: {
      fontFamily: {
        sans: ["Catamaran", "sans-serif"],
        anima: ["Anima", "sans"],
        roboto: ["Roboto", "sans-serif"],
      },
      height: {
        "80vh": "80vh",
        "85vh": "85vh",
        "90vh": "90vh",
      },
    },
  },
};
