/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0fafb",
          100: "#d9eff4",
          200: "#b7dfea",
          300: "#85c7db",
          400: "#4aa6c4",
          500: "#308aaa",
          DEFAULT: "#308aaa",
          600: "#2b718f",
          700: "#285c76",
          800: "#294e61",
          900: "#264253",
          950: "#142a38",
        },
        dark: "#0a0a0a",
        light: "#f0f0f0",
      },
    },
  },
  plugins: [],
};
