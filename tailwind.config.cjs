/* eslint-disable no-undef */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the paths to match your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['winter', 'night'],
  },
};
