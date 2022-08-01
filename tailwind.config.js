/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      'body': ['Overpass', 'sans-serif'],
    },
    extend: {
      colors: {
        LightGray : 'hsl(217, 12%, 63%)',
        MediumGray: 'hsl(216, 12%, 54%)',
        DarkBlue: 'hsl(213, 19%, 18%)',
        VeryVeryDarkBlue: 'hsl(228, 11%, 9%)',
        VeryDarkBlue: 'hsl(215, 25%, 13%)',
        Orange: 'hsl(25, 97%, 53%)',
        Tab: 'hsl(26, 48%, 40%)',
      },
    },
  },
  plugins: [],
}