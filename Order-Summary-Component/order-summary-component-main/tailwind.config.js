/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '375px',
      md: '480px'
    },
    extend: {
      colors: {
          paleBlue: 'hsl(225, 100%, 94%)',
          brightBlue: 'hsl(245, 75%, 52%)',
          veryPaleBlue: 'hsl(225, 100%, 98%)',
          desaturatedBlue: 'hsl(224, 23%, 55%)',
          darkBlue: 'hsl(223, 47%, 23%)',
          link: 'hsl(228, 44%, 45%)'
      }
    },
  },
  plugins: [],
}
