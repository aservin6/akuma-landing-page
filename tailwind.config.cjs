/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      primary: ["Sora", "sans-serif"],
      accent: ["Cinzel Decorative", "sans-serif"],
    },
    extend: {
      keyframes: {
        scaleUp: {
          "0%": { transform: "scale(0.96)", opacity: 0 },
          "100%": { transfrom: "scale(1),", opacity: 1 },
        },
      },
      animation: {
        "on-load": "scaleUp 400ms linear",
      },
      backgroundImage: {
        "akuma-deconstructed": "url('/assets/akuma-deconstructed.png')",
        "akuma-keyboard": "url('/assets/akuma-keyboard.png')",
      },
    },
  },
  plugins: [],
};
