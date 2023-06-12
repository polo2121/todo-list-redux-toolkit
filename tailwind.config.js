/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#D1E5F7",
        purple: "#D2CEFF",
        crisom: "#FFCECE",
        green: "#DAF2D6",
        yellow: {
          normal: "#FFF9DE",
          dark: "#6B685E",
        },
      },
    },
  },
  plugins: [],
};
