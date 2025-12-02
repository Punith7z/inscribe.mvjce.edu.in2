/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-1': '#FFFCE0',
        'bg-2': '#FCF4D7',
        'bg-3': '#FAEDCD',
        'accent-1': '#E7C8A0',
        'accent-2': '#D4A373',
        'beige-strong': '#C1835D',
        'beige-soft': '#FFF5D6',
        'beige-cream': '#FFF9E3',
        'heading': '#73634F',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-bg': 'linear-gradient(135deg, #FFFCE0 0%, #FCF4D7 50%, #FAEDCD 100%)',
        'gradient-primary': 'linear-gradient(135deg, #C1835D, #FFF5D6)',
        'card-gradient': 'linear-gradient(135deg, #FFF5D6 0%, #C1835D 100%)',
        'card-light-corners': 'radial-gradient(650px 650px at 0% 0%, rgba(193,131,93,0.22), transparent 70%), radial-gradient(650px 650px at 100% 100%, rgba(193,131,93,0.18), transparent 70%), linear-gradient(135deg, #FFF5D6 0%, #FFF9E3 55%, #E9D2A7 100%)',
      },
    },
  },
  plugins: [],
}

