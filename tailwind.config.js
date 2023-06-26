/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/components/navbar.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        'barlow-condensed': ['Barlow Condensed Regular', 'sans'],
        'bellefair-regular': ['Bellefair Regular', 'sans']
      }
    },
  },
  plugins: [],
}

