const { keyframes } = require('@emotion/react')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],theme: {
    extend: {
      keyframes: {
        slowMove:{
          '0%': {
            left:'0px'
          },
          '50%': {
            rigth:'50%'
          }
        }
      }
    },
  },
  plugins: [],
}
