/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    screens: {
      'lg': {'max': '992px'},
      'sm': {'max': '375px'}
    },
    container: {
      padding: '20px',
      center: true
    },
    extend: {
      colors: {
        castomWhite: 'hsl(36, 100%, 99%)',
        castomGray: 'hsl(233, 8%, 79%)',
        castomDark: 'hsl(236, 13%, 42%)',
        castomVeryDark: 'hsl(240, 100%, 5%)'
      },
    }
  },
  plugins: [],
}
