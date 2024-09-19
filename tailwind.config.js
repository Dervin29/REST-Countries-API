/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkModeElements: 'hsl(209, 23%, 22%)',
        darkModeBackground: 'hsl(207, 26%, 17%)',
        lightModeText: 'hsl(200, 15%, 8%)',
        lightModeInput: 'hsl(0, 0%, 52%)',
        lightModeBackground: 'hsl(0, 0%, 98%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        medium: 600,
        bold: 800,
      },
      fontSize: {
        'homepage-items': '14px',
        'detail-page': '16px',
      },
    },
  },
  plugins: [],
}
