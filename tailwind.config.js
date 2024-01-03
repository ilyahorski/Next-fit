/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-20': 'rgba(0,0,0,0.7)',
        'gray-50': '#d0e1f9',
        'gray-100': '#69717d',
        'gray-500': '#69717d',
        'primary-50': '#69717d',
        'primary-100': '#7a96b4',
        'primary-200': 'rgba(105,113,125,0.64)',
        'primary-300': '#69717d',
        'primary-400': '#243142',
        'primary-500': 'rgba(105,113,125,0.64)',
        'primary-600': '#69717d',
        'primary-700': '#bccbe0',
        'primary-800': 'rgba(31,41,55,0.6)',
        'secondary-100': '#bccbe0',
        'secondary-300': '#7a96b4',
        'secondary-400': '#3f6f91',
        'secondary-500': '#00809de5',
        'secondary-600': '#ffffff',
        'secondary-700': 'rgba(188,203,224,0.82)',
        'secondary-800': '#1f2937e5',
        'gray-800': '#1f2937e5',

      },
      backgroundImage: (theme) => ({
        'gradient-yellowred':
          'linear-gradient(90deg, #FF616A 0%, #FFC837 100%)',
        'mobile-home': 'url(\'./HomePageGraphic.png\')',
      }),
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        '2xs': '62px',
        '3xs': '40px',
        '4xs': '32px',
        '5xs': '60px',
        '6xs': '40px',
        '7xs': '40px',
        '8xs': '20px',
      },
      content: {
        hometext: 'url(\'/bk.png\')',
        abstractwaves: 'url(\'/AbstractWaves.png\')',
        sparkles: 'url(\'/Sparkles.png\')',
        circles: 'url(\'/Circles.png\')',
        footer: 'url(\'/ContactUsPageGraphic.jpg\')',
      },
    },
    screens: {
      us: '340px',
      xs: '600px',
      sm: '768px',
      md: '1160px',
      l: '1300px',
      sl: '1500px',
      ml: '1700px',
    },
  },
  plugins: [],
};
