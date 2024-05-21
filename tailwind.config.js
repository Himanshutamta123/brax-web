/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paperColor: "var(--paper-color)",
      },
    },
  },
  plugins: [],
};
