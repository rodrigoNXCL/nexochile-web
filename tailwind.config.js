/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nxorange: "#FF6600",
        nxblack: "#1A1A1A",
      },
    },
  },
  plugins: [],
};