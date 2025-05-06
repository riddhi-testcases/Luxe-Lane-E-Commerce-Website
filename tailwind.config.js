/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B323E', // deep burgundy
          light: '#BD4F5C',
          dark: '#621F28',
        },
        secondary: {
          DEFAULT: '#D4AF37', // gold
          light: '#E9CA56',
          dark: '#A88A29',
        },
        accent: {
          DEFAULT: '#F5E1E4', // soft pink
          light: '#FDF6F7',
          dark: '#E3C3C8',
        },
        success: {
          DEFAULT: '#2E7D32',
          light: '#4CAF50',
          dark: '#1B5E20',
        },
        warning: {
          DEFAULT: '#ED6C02',
          light: '#FF9800',
          dark: '#E65100',
        },
        error: {
          DEFAULT: '#D32F2F',
          light: '#EF5350',
          dark: '#C62828',
        },
        muted: {
          DEFAULT: '#6B7280',
          light: '#9CA3AF',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
          },
        },
      },
    },
  },
  plugins: [],
};