/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      gray: '#696969',
      white: '#FFF',
      black: '#000',
      aqua: {
        100: '#F0FFFF',
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
