module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "chonk-blue": {
          light: "#304FAC",
          DEFAULT: "#012A6A",
          dark: "1F3467",
        },
        "chonk-orange": {
          lightest: "#FCDBCC",
          light: "#F19767",
          DEFAULT: "#DC5201",
          dark: "#AC3C00",
          darkest: "#752700",
        },
      },
      fontFamily: {
        default: ["Poppins", "sans-serif"],
        title: ["Zen dots", "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
