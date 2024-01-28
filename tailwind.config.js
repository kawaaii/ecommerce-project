/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Noto Serif", "serif"],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
