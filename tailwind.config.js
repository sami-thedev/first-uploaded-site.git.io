module.exports = {
  content: [
    "./index.html", 
       "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        beat: 'beat 1s ease-out infinite',
        wiggle: 'wiggle 2s ease-in-out infinite',
      },

      keyframes: {
        wiggle: { '0%, 100%': { transform: 'rotate(-1deg)' },
         '70%': { transform: 'rotate(1deg)' },
         },


        beat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.1)' },
        }
      },



      backgroundImage: {
        'hero-pattern': "linear-gradient(to right bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('./images/school.jpg')",
      },

      colors: {
        new: '#0005',
        primary: '#FF6363',
        foot: '#333',

      }




    },
  },
  plugins: [],
}
