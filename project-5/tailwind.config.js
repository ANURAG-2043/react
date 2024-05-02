/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:"#5A5959",
        yellow:"#5A5959",
        "dark-yellow":"#FCCA3F",
        orange:"#F6820C"
      }
    },
  },
  plugins: [],
}

