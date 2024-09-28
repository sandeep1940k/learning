/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

      },
      zIndex: {
        '99999': '9999',
        '2': '2'
      }
    },
  },
  plugins: [],
}

