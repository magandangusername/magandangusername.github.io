const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  // purge: ['./src/**/*.{js,jsx,tsx}', './public/index.html'],
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      color: {
        primary: '#202225',
        secondary: '#5865f2',
        gray: colors.gray,
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          500: '#d4d7dc',
          400: '#e3e5e8',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        }

      },
      spacing: {
        88: '22rem',
      },
    },
  },
  plugins: [],
}
