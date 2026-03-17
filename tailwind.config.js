/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
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
        // New Palette for Light Theme Consistency
        'light-maroon': '#3D0A05',
        'light-brown': '#A58570',
        'light-beige': '#DAC1B1',
        'light-bg': '#FDFBF9',
        // New Brand Colors for Dark Mode
        'brand-red': '#FF4B4B',
        'brand-blue': '#4B7BFF',
        'brand-dark': '#0a0a0a',
      },
      fontFamily: {
        'montserrat': ['Apple Garamond', 'serif'],
        'poppins': ['Apple Garamond', 'serif'],
        'apple-garamond': ['Apple Garamond', 'serif'],
      },
      backgroundImage: {
        'gradient-bg': 'linear-gradient(135deg, #FDFBF9 0%, #F5EBE6 50%, #DAC1B1 100%)',
        'gradient-primary': 'linear-gradient(135deg, #3D0A05, #A58570)',
        'card-gradient': 'linear-gradient(135deg, #F5EBE6 0%, #DAC1B1 100%)',
        'card-light-corners': 'radial-gradient(650px 650px at 0% 0%, rgba(165,133,112,0.22), transparent 70%), radial-gradient(650px 650px at 100% 100%, rgba(61,10,5,0.18), transparent 70%), linear-gradient(135deg, #FDFBF9 0%, #F5EBE6 55%, #DAC1B1 100%)',
        // Dark mode gradients
        'dark-card-gradient': 'linear-gradient(135deg, rgba(255, 75, 75, 0.05) 0%, rgba(75, 123, 255, 0.05) 100%)',
        'dark-blend-gradient': 'linear-gradient(135deg, #FF4B4B 0%, #7B4BFF 50%, #4B7BFF 100%)',
      },
    },
  },
  plugins: [],
}

