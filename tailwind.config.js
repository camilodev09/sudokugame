/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
    },
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
