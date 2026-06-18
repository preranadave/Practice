/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tempting: ['Tempting'],
        Nomark: ['Nomark'],
        AncientMedium: ['Ancient Medium'],
        
        PortraitBold: ['Portrait-Bold'],
        
        pressuramono: ['pressura_mono'],
        
        pressuramonobold: ['pressura_mono_bold'],
        
        DarlothesGrunge: ['Darlothes Grunge'],

        Leander:['Leander']
        
      },
    },
  },
  plugins: [],
}