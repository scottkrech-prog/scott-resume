// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css,scss}'],
  theme: {
    extend: {
      colors: {
        // Roof-M-All palette
        yellow: '#efc603',
        orange: {
          400: '#2878f1',   // replaces orange-400 accent → RMA blue
          500: '#1f69da',   // replaces orange-500 → RMA blue hover
          600: '#1a5bc2',   // replaces orange-600 → RMA blue dark
        },
        stone: {
          800: '#171923',   // replaces stone-800 → RMA dark-2
          900: '#0d1020',   // replaces stone-900 nav → RMA nav-bg
        },
        neutral: {
          800: '#171923',   // replaces neutral-800
          900: '#11121a',   // replaces neutral-900 → RMA --dark
        },
        // Explicit RMA tokens for direct use
        'rma-blue': '#2878f1',
        'rma-blue-hover': '#1f69da',
        'rma-dark': '#11121a',
        'rma-dark-2': '#171923',
        'rma-dark-3': '#202331',
        'rma-nav': '#0d1020',
        'rma-soft': '#9bbcff',
      },
      keyframes: {
        typing: {
          '0%, 100%': {width: '0%'},
          '30%, 70%': {width: '100%'},
        },
        blink: {
          '0%': {opacity: 0},
        },
        'rotate-loader': {
          '0%': {transform: 'rotate(0deg)', strokeDashoffset: '360%'},
          '100%': {transform: 'rotate(360deg)', strokeDashoffset: '-360%'},
        },
      },
      screens: {
        touch: {raw: 'only screen and (pointer: coarse)'},
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
