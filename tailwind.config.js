/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      DEFAULT: '1rem',
      sm: '2rem',
      lg: '4rem',
      xl: '5rem',
      '2xl': '6rem',
    },
    extend: {
      minHeight: {
        "custom": "50vh",
        "custom_1": "150vh",
      }
    },
  },
  plugins: [require("@tailwindcss/typography") ,require("daisyui")],
  daisyui: {
    themes: [
    {
      bumblebee: {
        ...require('daisyui/src/colors/themes')['[data-theme=bumblebee]'],
        '.btn': {
          'border-radius': '2px',
          'font-weight': '700'
        },
        '.input': {
          'border-radius': '2px',
        }
      }
    },
    {
      dark: {
        ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
        '.btn': {
          'border-radius': '2px',
          'font-weight': '700'
        },
        '.input': {
          'border-radius': '2px',
        }
      }
    }
  ]
  },
}
