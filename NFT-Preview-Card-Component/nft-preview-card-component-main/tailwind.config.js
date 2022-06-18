/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
    },
    extend: {
        colors: {
            softBlue: 'hsl(215, 51%, 70%)',
            cyan: 'hsl(178, 100%, 50%)',
            veryDarkBlueMain: 'hsl(217, 54%, 11%)',
            veryDarkBlueCard: 'hsl(216, 50%, 16%)',
            veryDarkBlueLine: 'hsl(215, 32%, 27%)',
            white: 'hsl(0, 0%, 100%)',
            link: 'hsl(228, 45%, 44%)'
        }
    },
  },
  plugins: [],
}
