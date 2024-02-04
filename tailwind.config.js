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
        white: "#2D2D2D",
        "secondary-bg": "#1D1E1F",
        "tertiary-bg": "##212121",
        "accent-color": "#DAC5A7",
        "main-background": "#0E0E0E",
      },
      fontSize: {
        base: [
          "1rem",
          {
            color: "#DAC5A7",
            fontFamily: "Satoshi-Light",
          },
        ],
      },

      fontFamily: {
        satoshi: "Satoshi-Light",
        gambetta: "Gambetta-LightItalic",
      },
      animation: {
        ["infinite-slider"]: "infiniteSlider 20s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
      },
    },
  },
  plugins: [],
};
