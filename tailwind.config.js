/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        "super-light-gray": "#FCFCFC",
        "light-gray": "#F6F6F6",
        gray: "#EEEEEE",
        "darker-gray": "#9A9A9A",
        black: "#324051",
      },
    },
  },
  plugins: [],
};
