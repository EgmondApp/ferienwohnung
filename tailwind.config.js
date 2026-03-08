/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#A70605',
        'primary-dark': '#7F0504',
        blue: '#0566A8',
        gold: '#F0D55E',
        'gold-soft': '#F6EE93',
        anthracite: '#131313',
        stone: '#D1D2D2',
        offwhite: '#F8F5EE',
        warm: '#F2EDE4',
        border: '#DED6CA',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
