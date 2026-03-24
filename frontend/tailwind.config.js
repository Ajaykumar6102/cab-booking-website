/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#f97316',
        'brand-red': '#ef4444',
      }
    },
  },
  plugins: [],
}
