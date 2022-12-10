/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow Condensed"', 'sans-serif']
      },
      colors: {
        primary: '#16405B',
        primary2: '#15405B',
        primary3: '#14405B',
        primary4: '#13405B',
        primary5: '#12405B',
        primary6: '#12705B',
      }
    },
  },
  plugins: [],
}