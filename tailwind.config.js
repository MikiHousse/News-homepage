/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors: {
        castomWhite: 'hsl(36, 100%, 99%)',
        castomGray: 'hsl(233, 8%, 79%)',
        castomDark: 'hsl(236, 13%, 42%)',
        castomVeryDark: 'hsl(240, 100%, 5%)'
      }
    },
    // screens: {
    //   'se': {'max': '375px'}
    // }
  },
  plugins: [],
}
