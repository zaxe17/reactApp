/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'fuchsia-shadow': '0 2px 20px 2px #86198f',
        'purple-shadow': '0 0 20px 5px #a855f7',
      }
    },
  },
  plugins: [],
}