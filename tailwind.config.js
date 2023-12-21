/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'cormorant': 'Cormorant Garamond',
      'Jost': 'Jost',
      'Lobster': 'Lobster',
      'Poppins': 'Poppins',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

