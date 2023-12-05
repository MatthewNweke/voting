/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
    'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      backgroundColor: {
        'custom-color': 'rgba(178, 186, 161, 0.6)',
        'custom-color-transparent': 'rgba(0, 0, 0, 0.5)',
        'border-color': 'rgba(218, 227, 198, 1)',
        'text-color' : 'white'
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin.cjs'),
    require('@material-tailwind/react/utils/withMT'),
  ],
};
