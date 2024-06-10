/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['PlusJakartaSans', 'sans-serif'],
      },
      colors: {
        primary: {
          red: 'hsl(1, 90%, 64%)',
          blue: '#08327D',
        },
        neutral: {
          white: 'hsl(0, 0%, 100%)',
          'very-light-grayish-blue': '#F6FAFC',
          'light-grayish-blue-1': 'hsl(211, 68%, 94%)',
          'light-grayish-blue-2': '#F9FAFD',
          'grayish-blue': 'hsl(219, 14%, 63%)',
          'medium-grayish-blue': '#E5EFF9',
          'dark-grayish-blue': 'hsl(219, 12%, 42%)',
          'very-dark-blue': 'hsl(224, 21%, 14%)',
        },
      },
    },
  },
  plugins: [],
}