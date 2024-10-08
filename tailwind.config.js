/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: {
            base: "#1F1D18",
          },
          text: {
            base: "#9B9A95",
          }
        }
      },
    },
  },
  plugins: [],
}

