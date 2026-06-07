/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        peach: {
          50: "#fff8f4",
          100: "#ffefe6",
          200: "#ffd9ca",
          300: "#fdbfad",
          400: "#f79889",
          500: "#ee756b",
        },
        blush: {
          50: "#fff6f8",
          100: "#ffe9ef",
          200: "#ffd1dc",
          300: "#f9aebf",
          400: "#ef819c",
          500: "#df5d81",
        },
        clay: {
          50: "#fbf7f2",
          100: "#f1e8dd",
          200: "#e4d0bd",
          300: "#cfad91",
          400: "#b8896a",
          500: "#9d6f52",
          600: "#7f5841",
          700: "#624533",
        },
      },
      boxShadow: {
        soft: "0 18px 50px rgba(157, 111, 82, 0.14)",
        glow: "0 22px 70px rgba(239, 129, 156, 0.24)",
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "warm-radial":
          "radial-gradient(circle at top left, rgba(255, 209, 220, 0.9), transparent 34%), radial-gradient(circle at bottom right, rgba(255, 217, 202, 0.95), transparent 38%)",
      },
    },
  },
  plugins: [],
};
