/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    backgroundImage: theme => ({
      'gradient-black': 'linear-gradient(to top, #1c1b1c, transparent)',
    }),
  },
  plugins: [],
}

