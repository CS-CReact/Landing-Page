/** @type {import('tailwindcss').Config} */
module.exports = {
  //using purge to tree-shake unused styles
  purge: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        dark: '#28444B',
        grey: '#708182',
        light: '#CEE0E0',
        green: '#E3F1EC',
        lightgreen: '#FAFEFD',
        white:'#FFFFFF'
      },
      fontFamily: {
        sans: ['var(--font-mulish)', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  variants: {
    fill: [],
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
      textColor: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('daisyui'),
  ],
};
