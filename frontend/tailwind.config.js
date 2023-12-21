/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
          'Inter':['Inter', 'sans-serif'],
          'Montserrat':['Montserrat', 'sans-serif'],
      },
      colors:{
        perpus: '#FFF7E9',
       masuk : '#0C356A',
       frame :'#F3F6FF',
       layanan:'#F3F6FF'
     }
    },
  },
  plugins: [],
}

