/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],theme: {
    extend: {
      backgroundImage: {
        'mountain': "url('/images/mountain.jpg')",
        'ocean': "url('/images/ocean.jpg')",
      }

    },
  },
  plugins: [],
}