module.exports = {
  content: ["./pages/**/*.{html,tsx}", "./components/**/*.{html,tsx}"],
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
        testfont: ["Fascinate", "sans"],
      },
      backgroundImage: {
        hero: "url('/images/BackgroundImage.jpg')",
      },
      height: {
        "85vh": "85vh",
      },
    },
  },
};
