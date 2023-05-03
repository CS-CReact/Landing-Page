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
        darkgreen: '#6F9A97',
        green: '#E7FFF7',
        palegreen: '#EDFFF9',
        lightgreen: '#FAFEFD',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['var(--font-mulish)'],
        serif: ['Merriweather', 'serif'],
      },
      screens: {
        phone: '360px',
        // => @media (min-width: 375px) { ... }

        tablet: '640px',
        // => @media (min-width: 640px) { ... }

        desktop: '1024px',
        // => @media (min-width: 1280px) { ... }
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
