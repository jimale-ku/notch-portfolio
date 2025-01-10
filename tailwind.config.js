/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
        secondary: "#64ffda",
        tertiary: "#112240",
        textLight: "#ccd6f6",
        textDark: "#8892b0",
      },
      fontFamily: {
        'righteous': ['Righteous', 'cursive'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 15px rgba(100, 255, 218, 0.5)' },
          '50%': { textShadow: '0 0 30px rgba(100, 255, 218, 0.8)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shine: 'shine 8s linear infinite',
        glow: 'glow 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}