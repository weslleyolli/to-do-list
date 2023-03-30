/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.jsx",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D0D0D",
        bgPrimary: "#1A1A1A",
        box: "#262626",
        blue: "#1E6F9F"
      }
    },
  },
  plugins: [],
}
