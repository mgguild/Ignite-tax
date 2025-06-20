/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
      screens: {
        '3xl': '1600px',
        
        'below-820': {'max': '820px'},
        'below-912': {'max': '912px'},
        'below-1024': {'max': '1024px'},
        'below-540': { 'max': '540px' },
      },

      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
      },
     
    },
  },
  plugins: [],
};