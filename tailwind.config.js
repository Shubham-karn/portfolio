/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backdropBlur: {
        'custom': '15px'
     },
      screens: {
        '1200': { 'max': '1199px', 'min': '1100px' }, 
        '1100': { 'max': '1099px', 'min': '800px' },
        '800': { 'max': '799px' },
        'small': { 'max': '1099px' },
      },
      colors: {
        'custom-color': 'rgb(10, 4, 22)',
        'navbar-color': '#1b1a2ea9',
        'quote':'rgba(178, 121, 216, 0.959)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
