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
        'gray-20': '#e5e3e3',
        'gray-50': '#c0c0c0',
        'gray-100': '#516986BF',
        'gray-500': '#0B0C10',
        'primary-50': '#88BDBC',
        'primary-100': '#6ccbc7',
        'primary-200': '#56a4a1',
        'primary-300': '#45A29E',
        'primary-400': '#0c6761',
        'primary-500': '#168f8a',
        'secondary-100': '#1256a9',
        'secondary-300': '#7a96b4',
        'secondary-400': '#3f6f91',
        'secondary-500': 'rgba(0,128,157,0.42)',

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
      content: {
        hometext: 'url(\'/HomeText.png\')',
        abstractwaves: 'url(\'/AbstractWaves.png\')',
        sparkles: 'url(\'/Sparkles.png\')',
        circles: 'url(\'/Circles.png\')',
      },
    },
    screens: {
      xs: '600px',
      sm: '768px',
      md: '1160px',
    },
  },
  plugins: [],
};
