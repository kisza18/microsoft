module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: { min: "490px", max: "768px" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
