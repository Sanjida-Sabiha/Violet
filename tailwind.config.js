/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding:'18px',
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1400px",
      },
    },
    extend: {
      fontFamily: {
        'NeueMontreal': ['Neue Montreal', 'sans-serif']
      },
      colors:{
        'mainbg':'#F3F5F6',
        'primaryColor':'#190F4C',
        'SecondaryColor':'#545454',
        'btnBg':'#765EFF',
        'lightgray':'#6F6F6F',
        'lightGreen':'#E9F3B0',
        'textGreen':'#5A7707',
        'promoBtn':'#C1D63C',
        'lightBlue':'#E6EEF1',
      },
      fontSize: {
        "3xl": "24px",
        "3.5xl": "26px",
        "28xl":"28px",
        "4xl": "30px",
        "4.2xl":'34px',
        "4.5xl":'40px',
        '5xl':'50px',
        '54xl':'54px',
        "6xl": "60px",
        '6.5xl':"64px",
        '7xl':"70px",
        '7.5xl':"74px",
        "8xl": "80px",
        "150xl":"150px",
      },
      lineHeight: {
        '8': '30px',
        '18': '70px',
        '10': '34px',
        '11': '36px',
        '12':'40px',
        '44':'44px',
        '13':'50px',
        '19':'60px',
        '16':'64px',
        '21':'80px',
        '84':'84px',
        '20':'90px',
        '96':'96px',
        '150':'150px'
      },
      borderRadius:{
        '12px':'12px',
        '24px':'24px',
        '30px':'30px',
        '40px':'40px',
        '80px':'80px',
        '100px':'100px'
      },
      backgroundImage: {
        'bgBanner': "url('/assets/img/homepage/promo-banner.png')",
        'cardBg':"url('/assets/img/homepage/bg-1.png')",
        'Bg':"url('/assets/img/homepage/bg-2.png')",
        'Bg1':"url('/assets/img/homepage/bg-3.png')",
        'cardBg1':"url('/assets/img/homepage/Noise.png')",
        'promobanner':"url('/assets/img/homepage/promo-banner_1.png')",
        'flower':"url('/assets/img/homepage/flower-4.png')",
        'flowerBg':"url('/assets/img/aboutpage/flower.png')",
        'signBg':"url('/assets/img/sign-banner.png')",
      },
      boxShadow:{
        'box-shadow': '0px 163.78px 166.57px -115.39px #00000033',
        'box-shadow1': '0px 0px 155.77px 0px #0000001A',
      }
      

    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-gradient': {
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.8) 100%)',
          '-webkit-text-fill-color': 'transparent',
          borderRadius:'22px',
          padding:'16px',
        },
      })
    },
  ],
}
