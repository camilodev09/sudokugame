/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      RussoOne: ["Russo One", "sans-serif"],
      Oswald: ["Oswald", "sans-serif"],
      Montserrat: ["Montserrat", "sans-serif"],
      Orbitron: ["Orbitron", "sans-serif"],
    },
  },

  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".hidden-custom": {
          display: "none",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
