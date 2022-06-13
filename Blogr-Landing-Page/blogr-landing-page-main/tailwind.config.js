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
            lightRed: 'hsl(356, 100%, 66%)',
            veryLightRed: 'hsl(355, 100%, 74%)',
            veryDarkBlue: 'hsl(208, 49%, 24%)',
            white: 'hsl(0, 0%, 100%)',
            grayishBlack: 'hsl(240, 5%, 30%)',
            grayishBlackLight: 'hsl(240, 2%, 79%)',
            grayishBlue: 'hsl(216, 20%, 40%)',
            veryDarkGrayBlue: 'hsl(207, 13%, 34%)',
            veryDarkBlackBlue: 'hsl(240, 10%, 16%)',
            veryLightRedGrad: 'hsl(13, 100%, 72%)',
            lightRedGrad: 'hsl(353, 100%, 62%)',
            veryDarkGrayBlueGrad: 'hsl(237, 17%, 21%)',
            veryDarkDesBlueGrad: 'hsl(237, 23%, 32%)',
            frontendmentorLink: 'hsl(228, 45%, 44%)'
        },
        fontFamily: {
            overpass: ['Overpass'],
            ubuntu: ['Ubuntu']
        }
    },
  },
  plugins: [],
}
