/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}"
  ],
  theme: {
    extend: {
      fontFamily: { 
        "interactive": ["Roboto Flex", "sans-serif"],
        "paragraph": ["Roboto Condensed", "system-ui"],
        "subtitle": ["Roboto Condensed", "system-ui"],
        "title": ["Bebas Neue", "sans-serif"],
        "logo": ["Roboto Condensed", "system-ui"],
      },
      colors: {
        "black": "#282828",
        "super-black": "#000000",
        "blue": "#0147FF",
        "light-blue": "#789DFF",
        "white": "#F7F7F7",
        "super-white": "#FFFFFF",
        "grey": "#F1F1F1"
      },
    },
  },
  plugins: [],
}

