/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        "secondary-bg": "#1D1E1F",
        "accent-color": "#DAC5A7",
        "main-background": "#0E0E0E",
      },
      fontFamily: {
        satoshi: '"Satoshi-Variable", sans-serif',
        gambetta: '"Gambetta-VariableItalic", serif',
        "gambetta-upright": '"Gambetta-Variable", serif',
        grotesk: '"Space Grotesk", sans-serif',
        mono: '"Space Mono", monospace',
      },
      animation: {
        loop: "loop 28s linear infinite",
      },
      keyframes: {
        loop: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
