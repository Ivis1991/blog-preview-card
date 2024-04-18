/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    boxShadow: {
      "custom-shadow": '8px 8px 0px 0px  hsl(0, 0%, 7%)',
    },
    container: {
      screens: {
        sm: "375px",
        xl: "1440px",
      },
    },
    extend: {
      colors: {
        Yellow: "hsl(47, 88%, 63%)",
        White: "hsl(0, 0%, 100%)",
        Grey: "hsl(0, 0%, 50%)",
        Black: "hsl(0, 0%, 7%)",
      },
    },
  },
  plugins: [],
};
