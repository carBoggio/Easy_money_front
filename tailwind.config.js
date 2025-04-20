// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        moveLeftRight: "moveLeftRight 5s linear infinite",
      },
      keyframes: {
        moveLeftRight: {
          "0%": { left: "-10%" },
          "100%": { left: "100%" },
        },
      },
      colors: {
        primary: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
        secondary: {
          50: "#F0FDFF",
          100: "#E0FDFF",
          200: "#BAF8FF",
          300: "#83F0FF",
          400: "#38E3FF",
          500: "#0BC7EA", // Corregido: era "#0BC7EsA"
          600: "#0098C2",
          700: "#017B9E",
          800: "#016581",
          900: "#01546A",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
