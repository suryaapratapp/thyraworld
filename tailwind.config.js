/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Light canvas + surfaces
        canvas: {
          DEFAULT: "#FEFCFF",
          soft: "#FBF7FD",
          warm: "#FFF9F5",
        },
        ink: {
          900: "#1B1B2F",
          700: "#3A3A52",
          500: "#5A5A72",
          400: "#8181A0",
          300: "#A9A9C0",
          200: "#DCD8E6",
          100: "#EFEBF5",
        },
        // Candy-bright accents
        candy: {
          pink: "#FF4D8D",
          violet: "#7C3AED",
          mint: "#06D6A0",
          yellow: "#FFD60A",
          coral: "#FF7A5C",
          sky: "#4CC9F0",
        },
      },
      boxShadow: {
        soft: "0 4px 20px rgba(27, 27, 47, 0.06)",
        card: "0 8px 30px rgba(27, 27, 47, 0.08)",
        lift: "0 18px 44px rgba(27, 27, 47, 0.13)",
        pink: "0 10px 30px rgba(255, 77, 141, 0.32)",
        violet: "0 10px 30px rgba(124, 58, 237, 0.28)",
        mint: "0 10px 30px rgba(6, 214, 160, 0.26)",
      },
      fontFamily: {
        display: ["Fredoka", "ui-rounded", "system-ui", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "mesh-hero":
          "radial-gradient(48rem 34rem at 8% -6%, rgba(255,77,141,0.16), transparent 60%), radial-gradient(42rem 30rem at 92% 4%, rgba(124,58,237,0.14), transparent 58%), radial-gradient(38rem 28rem at 50% 104%, rgba(6,214,160,0.13), transparent 60%)",
        "mesh-soft":
          "radial-gradient(32rem 22rem at 90% 0%, rgba(255,214,10,0.14), transparent 60%), radial-gradient(30rem 22rem at 4% 100%, rgba(76,201,240,0.13), transparent 60%)",
        "candy-gradient": "linear-gradient(120deg, #FF4D8D 0%, #7C3AED 100%)",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(0,-24px,0) scale(1.08)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        blob: "blob 14s ease-in-out infinite",
        "blob-slow": "blob 20s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
