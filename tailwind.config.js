/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#B8892A',
          light: '#F5E6C0',
          mid: '#E2B84A',
          dim: '#8A6A28',
        },
        cream: '#FDFAF5',
        brand: {
          dark: '#1A1410',
          mid: '#5C4A2A',
          muted: '#8A7660',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['system-ui', '-apple-system', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
