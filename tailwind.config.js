/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'radial-gradient': 'radial-gradient(circle, black, transparent)',
      })
    }
  },
  plugins: [],
};