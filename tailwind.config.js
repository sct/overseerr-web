/* eslint-disable */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        'max-height': 'max-height',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.indigo.500'),
              '&:hover': {
                color: theme('colors.indigo.400'),
              },
            },

            h1: {
              color: theme('colors.gray.300'),
            },
            h2: {
              color: theme('colors.gray.300'),
            },
            h3: {
              color: theme('colors.gray.300'),
            },
            h4: {
              color: theme('colors.gray.300'),
            },
            h5: {
              color: theme('colors.gray.300'),
            },
            h6: {
              color: theme('colors.gray.300'),
            },

            strong: {
              color: theme('colors.gray.400'),
            },

            code: {
              color: theme('colors.gray.300'),
            },

            figcaption: {
              color: theme('colors.gray.500'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
