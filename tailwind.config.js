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
        secondary: {
          50: "#edfff7",
          100: "#d5ffef",
          200: "#aeffe0",
          300: "#70ffc9",
          400: "#2bfdac",
          500: "#05ff9f",
          DEFAULT: "#05ff9f",
          600: "#00c072",
          700: "#00965c",
          800: "#06754c",
          900: "#076040",
          950: "#003723",
        },
        dark: "#070e13",
        light: "#f0f0f0",
      },
      keyframes: {
        slide: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
      animation: {
        slide: "slide 12s linear infinite",
      },
    },
  },
  plugins: [],
};
