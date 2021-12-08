module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#311b92',
        primary_light: '#6746c3',
        primary_dark: '#000063',
        secondary: '#00bfa5',
        secondar_light: '#5df2d6',
        secondary_dark: '#008e76',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
