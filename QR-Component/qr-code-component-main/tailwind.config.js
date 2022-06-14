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
            white: 'hsl(0, 0%, 100%)',
            lightGray: 'hsl(212, 45%, 89%)',
            grayishBlue: 'hsl(220, 15%, 55%)',
            linkColor: 'hsl(228, 45%, 44%)',
            darkBlue: 'hsl(218, 44%, 22%)'
        }
    },
  },
  plugins: [],
}
