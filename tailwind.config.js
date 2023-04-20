/** @type {import('tailwindcss').Config} */
module.exports = {
  //using purge to tree-shake unused styles
  purge: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    colors: {
      dark: '#0C2730',
      grey: '#708182',
      light: '#CEE0E0',
      green: '#E3F1EC',
      lightgreen:'#FAFEFD'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  variants: {
    fill: [],
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require("daisyui")
  ],
};
