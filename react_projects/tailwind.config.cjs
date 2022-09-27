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
        'applyAmiko': ['Amiko', 'sans-serif'],
        'applyPassions' :['Passions Conflict', 'cursive'],
        'applyMukta' :['Mukta Malar', 'sans-serif'],
        'applyNiconne': ['Niconne', 'cursive'],
        'applyDosis':['Dosis', 'sans-serif'],
        'applyOregano' :['Oregano', 'cursive'],
        'applyPTSans':['PT Sans', 'sans-serif'],
        'applyBubblegum':['Bubblegum Sans', 'cursive'],
        'applyLibre':['Libre Baskerville', 'serif'],
        'applyPatrick':['Patrick Hand', 'cursive'],
        'applyArchitect':['Architects Daughter', 'cursive'],
      },
    },
  },
  plugins: [],
}
