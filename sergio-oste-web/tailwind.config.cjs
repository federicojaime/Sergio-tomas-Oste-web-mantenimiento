/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a2639",
        secondary: "#3f51b5",
        accent: "#ff5722",
        light: "#f5f5f5",
        dark: "#212121",
        textColor: "#333333",
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right, rgba(26, 38, 57, 0.9), rgba(63, 81, 181, 0.8)), url('/src/assets/back.jpg')",
        'achievements-pattern': "linear-gradient(to right, rgba(26, 38, 57, 0.9), rgba(63, 81, 181, 0.8)), url('/src/assets/achievements-bg.jpg')",
      },
    },
  },
  plugins: [],
}