/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          50: '#fefcf8',
          100: '#fdf8f0',
          200: '#faf0e1',
          300: '#f5e6d1',
          400: '#edd4b8',
          500: '#e2c19a',
          600: '#d4a574',
          700: '#c4915a',
          800: '#b07d4a',
          900: '#8d5f3a',
          950: '#5c3d25',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e8ebe8',
          200: '#d1d7d1',
          300: '#aeb9ae',
          400: '#8a9a8a',
          500: '#6d7d6d',
          600: '#566456',
          700: '#475147',
          800: '#3c433c',
          900: '#343934',
          950: '#1a1e1a',
        },
        earth: {
          50: '#faf9f7',
          100: '#f3f0eb',
          200: '#e6dfd4',
          300: '#d4c9b7',
          400: '#c0b095',
          500: '#b19a7a',
          600: '#a08866',
          700: '#857155',
          800: '#6d5c47',
          900: '#594c3c',
          950: '#2f271f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}