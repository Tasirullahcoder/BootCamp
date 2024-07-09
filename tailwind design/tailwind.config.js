/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        roboto: ["Roboto", "sans-serif"],
        poetsen: ["Poetsen One", "system-ui"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        primary: "#FEE715",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        bg_primary: "#767070",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
      },
    },
  },
  plugins: [],
};
