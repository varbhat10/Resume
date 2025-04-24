/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#D4AF37',      // Orangey gold
        'secondary': '#363636',    // Dark silver/charcoal
        'accent': '#C0C0C0',       // Silver
        'site-bg-light': '#F5F5F5', // Light silver background
        'site-bg-dark': '#1E1E1E',  // Dark silver/gray background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}; 