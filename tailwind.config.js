/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'dark': '#070502',
        'mocha': '#382a1d',
        'caramel': '#8f614b',
        'cream': '#b69b7d',
        'cloud': '#e1dad2'
      },
    },
  },
  plugins: [],
}

