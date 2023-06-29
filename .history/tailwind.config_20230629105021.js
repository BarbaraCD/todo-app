/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      white: '#FFF',
      black: '#000',
      gray: {
        100: '#e0e0e0',
        500: '#808080',
      },
      aqua: {
        100: 'rgba(49, 191, 134, 0.1)',
        500: '#059669B3',
        700: '#059669',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif',
      },
    },
  },
  plugins: [],
}
