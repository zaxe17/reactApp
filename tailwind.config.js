/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'fuchsia-shadow': '0 2px 10px #86198f',
      }
    },
  },
  plugins: [],
}