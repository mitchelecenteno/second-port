/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    //* SCREENS #1
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    //*SCREENS #2
    // screens: {
    //   tablet: { min: "0px", max: "1023px" },
    //   // => @media (min-width: 640px) and (max-width: 767px) { ... }

    //   laptop: { min: "1024px", max: "1279px" },
    //   // => @media (min-width: 1024px) and (max-width: 1279px) { ... }

    //   desktop: { min: "1280px" },
    //   // => @media (min-width: 1280px) { ... }

    //   "large-desktop": { min: "1440px" },
    //   // => @media (min-width: 1440px) { ... }
    // },

    //*FONTS
    // fontFamily: {
    //   roboto: ["Roboto", "sans-serif"],
    // },
  },
  plugins: [],
};
