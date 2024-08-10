/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'gptBg': '#212121',
      'gptColor': '#fff',
      'gptBorderColor': '#ffffff1a',
      'gptInputBg': '#ffffff0d',
    },
    screens:{
      'xs': '475px',
    },
    extend: {},
  },
  plugins: [],
}

