/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'apply': ['Courgette', 'cursive'],
        'applyOnCard': [ 'Great Vibes', 'cursive'],
        'applyFont': ['Overlock', 'cursive'],
        'applyFontCard2': ['Sacramento', 'cursive'],
        'applyAmiko': ['Amiko', 'sans-serif']
      },
    },
  },
  plugins: [],
}
