/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-900': '#17639A',
        'blue-700': '#01204C',
      },
    },
  },
  plugins: [],
}
