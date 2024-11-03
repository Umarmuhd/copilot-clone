/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F9F3ED",
        dark: {
          DEFAULT: "#111312",
        },
        light: {
          DEFAULT: "#FDFDF1",
        },
      },
      borderRadius: {
        "5xl": "1.75rem",
        "7xl": "2rem",
      },
    },
  },
  plugins: [],
};
