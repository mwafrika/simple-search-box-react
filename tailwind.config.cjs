/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: {
          min: '425px',
          max: '639px',
        },
        xxs: {
          min: '375px',
          max: '424px',
        },
        xxxs: {
          min: '320px',
          max: '374px',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
