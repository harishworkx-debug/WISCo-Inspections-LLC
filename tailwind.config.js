/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F2F5F8',
          100: '#DDE4EC',
          600: '#2A3F5B',
          700: '#213349',
          800: '#1C2D41',
          DEFAULT: '#17283D',
        },
        brand: {
          50: '#EEF5FB',
          100: '#D5E6F5',
          600: '#22588C',
          700: '#1D4B76',
          DEFAULT: '#2866A0',
        },
        gold: {
          100: '#FBF1DC',
          400: '#E5B65F',
          DEFAULT: '#D9A441',
          700: '#8A6216',
        },
        ink: '#1E2A38',
        mist: '#F4F6F8',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(23,40,61,0.06), 0 8px 24px rgba(23,40,61,0.08)',
        lift: '0 4px 8px rgba(23,40,61,0.08), 0 20px 40px rgba(23,40,61,0.14)',
      },
    },
  },
  plugins: [],
};
