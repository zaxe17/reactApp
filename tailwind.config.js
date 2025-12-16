/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'fuchsia-shadow': `
            0 6px 20px rgba(134, 25, 143, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 0.2)`,
        'purple-shadow': '0 0 20px 5px #a855f7',
      }
    },
  },
  plugins: [],
}