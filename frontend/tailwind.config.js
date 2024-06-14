/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: ' rgb(23 23 23)', // Replace with your primary color hex code
      },
      fontFamily: {
        font: 'font-sans'
      },
    },
  },
  plugins: [],
}
