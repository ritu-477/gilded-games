/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'Josefin': "'Josefin sans',sans serif",
        'poppins': "'poppins' ,sans serif",
        'Montserrat': "'Montserra' ,sans serif",
      },

      backgroundImage: {
        'griadent-hh': ' linear-gradient(149.67deg, #815CC8 29.44%, #1BABFE 81.54%)',
      },
     
     
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
          '3xl': '1600px',
          '4xl': '1700px',
          '5xl': '1800px',
          '6xl': '1920px',
        },
  
    },
  },
  plugins: [],
}