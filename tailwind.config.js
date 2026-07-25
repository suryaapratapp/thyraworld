/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Canvas + surfaces — the "midnight" half of Midnight Yarn
        ink: {
          950: "#07080C",
          900: "#0B0D12",
          800: "#0F131A",
          700: "#151922",
          600: "#1C2029",
          500: "#252A35",
          400: "#3A404E",
          300: "#525A6B",
        },
        // Type + hairlines
        bone: {
          50: "#F7F5F1",
          100: "#F4F1EC",
          200: "#DCD7CE",
          300: "#A8AEBD",
          400: "#8B93A5",
          500: "#6B7385",
        },
        // The "yarn" half — every accent is a real yarn colourway
        yarn: {
          coral: "#FF6B4A",
          ember: "#FF4D6D",
          amber: "#FFB627",
          sage: "#4ECDC4",
          violet: "#A78BFA",
          rose: "#FF8FA3",
          mint: "#6EE7B7",
          sky: "#60A5FA",
        },
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.42)",
        lift: "0 24px 64px rgba(0, 0, 0, 0.55)",
        "glow-coral": "0 0 0 1px rgba(255,107,74,0.28), 0 18px 48px rgba(255,107,74,0.24)",
        "glow-sage": "0 0 0 1px rgba(78,205,196,0.28), 0 18px 48px rgba(78,205,196,0.20)",
        "glow-violet": "0 0 0 1px rgba(167,139,250,0.28), 0 18px 48px rgba(167,139,250,0.22)",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "mesh-hero":
          "radial-gradient(60rem 40rem at 12% -8%, rgba(255,107,74,0.22), transparent 62%), radial-gradient(52rem 36rem at 88% 8%, rgba(167,139,250,0.20), transparent 60%), radial-gradient(44rem 34rem at 50% 108%, rgba(78,205,196,0.16), transparent 62%)",
        "mesh-soft":
          "radial-gradient(38rem 26rem at 88% 0%, rgba(255,182,39,0.12), transparent 60%), radial-gradient(34rem 24rem at 4% 100%, rgba(167,139,250,0.12), transparent 60%)",
        "grid-faint":
          "linear-gradient(rgba(255,255,255,0.032) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.032) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "56px 56px",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(0,-22px,0) scale(1.06)" },
        },
        "yarn-draw": {
          "0%": { strokeDashoffset: "1400" },
          "100%": { strokeDashoffset: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        spinslow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        drift: "drift 13s ease-in-out infinite",
        "drift-slow": "drift 19s ease-in-out infinite",
        "yarn-draw": "yarn-draw 3.2s ease-out forwards",
        shimmer: "shimmer 2.4s linear infinite",
        "fade-up": "fade-up 0.6s ease-out both",
        spinslow: "spinslow 26s linear infinite",
      },
    },
  },
  plugins: [],
};
