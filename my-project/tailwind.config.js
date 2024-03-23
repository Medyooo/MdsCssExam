/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
      'roboto-bold': ['roboto-bold', 'sans-serif'],
      'roboto-medium': ['roboto-medium', 'sans-serif'],
      'roboto-regular': ['roboto-regular', 'sans-serif']
      },
      colors: {
        'purple-primary': '#7D77FF',
        'purple-secondary': '#B6B2FF',
         'white' : '#FEFEFE',
         'black' : '#1B1C1E'

        
      }
    },
  },
  plugins: [],
}

