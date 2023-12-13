/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#020201",
        white: "#fafafa",
      },
      fontFamily: {
        // primary: ["Arial", "sans-serif"],
        secondary: ['"Domaine Sans Fine Regular Regular"', "serif"],
      },
    },
  },
  plugins: [],
};
