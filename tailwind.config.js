const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Your content paths...
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@heroui/react/dist/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#0072F5",
              50: "#e6f1fe",
              100: "#cce3fd",
              200: "#99c7fb",
              300: "#66aaf9",
              400: "#338ef7",
              500: "#0072f5",
              600: "#005bc4",
              700: "#004493",
              800: "#002e62",
              900: "#001731",
            },
            // You can add more color variants if needed
            secondary: {
              DEFAULT: "#7828C8",
              50: "#f2eafa",
              100: "#e4d4f4",
              200: "#c9a9e9",
              300: "#ae7ede",
              400: "#9353d3",
              500: "#7828c8",
              600: "#6020a0",
              700: "#481878",
              800: "#301050",
              900: "#180828",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#3694FF",
              50: "#e6f1fe",
              100: "#cce3fd",
              200: "#99c7fb",
              300: "#66aaf9",
              400: "#338ef7",
              500: "#0072f5",
              600: "#005bc4",
              700: "#004493",
              800: "#002e62",
              900: "#001731",
            },
            // Adjust colors for dark mode if needed
            secondary: {
              DEFAULT: "#9353d3",
              50: "#f2eafa",
              100: "#e4d4f4",
              200: "#c9a9e9",
              300: "#ae7ede",
              400: "#9353d3",
              500: "#7828c8",
              600: "#6020a0",
              700: "#481878",
              800: "#301050",
              900: "#180828",
            },
          },
          // Dark theme specific adjustments
          extend: {
            backgroundColor: {
              DEFAULT: "#0F1114",
            },
            textColor: {
              DEFAULT: "#ECEDEE",
            },
          },
        },
        // Cryptocurrency themed variant
        crypto: {
          extend: "light",
          colors: {
            primary: {
              DEFAULT: "#F7931A", // Bitcoin orange
              50: "#fef2e6",
              100: "#fde5cc",
              200: "#faca99",
              300: "#f8b066",
              400: "#f79733",
              500: "#f7931a", // Bitcoin color
              600: "#c57515",
              700: "#935810",
              800: "#623a0a",
              900: "#311d05",
            },
            secondary: {
              DEFAULT: "#627EEA", // Ethereum blue
              50: "#eef1fc",
              100: "#dce3fa",
              200: "#b9c7f5",
              300: "#96abf0",
              400: "#738fea",
              500: "#627eea", // Ethereum color
              600: "#4e65bb",
              700: "#3a4c8c",
              800: "#27325e",
              900: "#13192f",
            },
          },
        },
        // Purple dark theme
        "purple-dark": {
          extend: "dark",
          colors: {
            primary: {
              DEFAULT: "#9353d3",
              50: "#f2eafa",
              100: "#e4d4f4",
              200: "#c9a9e9",
              300: "#ae7ede",
              400: "#9353d3",
              500: "#7828c8",
              600: "#6020a0",
              700: "#481878",
              800: "#301050",
              900: "#180828",
            },
          },
        },
      },
    }),
  ],
};
