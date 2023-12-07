/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        weather: {
          scondBG: "#202B3C",
          // scondText: "#202B3B",
        },
      },
    },
  },
  plugins: [],
};
