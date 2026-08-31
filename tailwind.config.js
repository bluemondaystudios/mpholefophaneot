/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#33465f', 50: '#f4f6f8', 100: '#e6eaf0', 200: '#cad3e0', 700: '#2c3c52', 800: '#253346', 900: '#1e2a39' },
        coral: { 50: '#fdf4ef', 100: '#fbe6d9', 200: '#f4c8ab', 300: '#eba97c', 400: '#e28a52', 500: '#d06f3a', 600: '#b2582c', 700: '#8f4623', 800: '#6f371c' },
        teal: { 50: '#eef5f2', 100: '#dbeae4', 200: '#b3d3c8', 300: '#89b8a8', 400: '#5f9c88', 500: '#437d6a', 600: '#356455', 700: '#2b5145', 800: '#234139' },
        cream: { 50: '#fffdf9', 100: '#fbf5ea', 200: '#f4ead6' },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        soft: '0 24px 60px -8px rgba(34, 24, 12, 0.12)',
        warm: '0 10px 30px -6px rgba(176, 88, 44, 0.16)',
      },
    },
  },
  plugins: [],
};
