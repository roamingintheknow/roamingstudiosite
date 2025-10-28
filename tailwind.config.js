/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['var(--font-header)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        primary: '#d4bea6', // example, adjust as needed
        secondary: '#000000',
      },
    },
  },
  plugins: [],
};
