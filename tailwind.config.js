/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a1628',
        'bg-surface': '#0f1f38',
        'bg-card': '#132040',
        'accent': '#00d4b4',
        'accent-dim': '#00a88e',
        'accent-glow': 'rgba(0, 212, 180, 0.15)',
        'text-primary': '#e2e8f0',
        'text-secondary': '#8899aa',
        'text-muted': '#4a6075',
        'border-color': 'rgba(0,212,180,0.15)',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        'accent': '0 0 20px rgba(0, 212, 180, 0.3)',
        'accent-lg': '0 0 40px rgba(0, 212, 180, 0.2)',
        'card': '0 4px 30px rgba(0,0,0,0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      },
      backgroundImage: {
        'topo': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600'%3E%3Cdefs%3E%3Cstyle%3E.c%7Bfill:none;stroke:%2300d4b4;stroke-opacity:0.07;stroke-width:1%7D%3C/style%3E%3C/defs%3E%3Cellipse class='c' cx='300' cy='300' rx='280' ry='180'/%3E%3Cellipse class='c' cx='300' cy='300' rx='240' ry='145'/%3E%3Cellipse class='c' cx='300' cy='300' rx='200' ry='110'/%3E%3Cellipse class='c' cx='300' cy='300' rx='160' ry='78'/%3E%3Cellipse class='c' cx='300' cy='300' rx='120' ry='48'/%3E%3Cellipse class='c' cx='300' cy='300' rx='80' ry='22'/%3E%3Cellipse class='c' cx='80' cy='80' rx='200' ry='130'/%3E%3Cellipse class='c' cx='80' cy='80' rx='160' ry='95'/%3E%3Cellipse class='c' cx='80' cy='80' rx='120' ry='62'/%3E%3Cellipse class='c' cx='80' cy='80' rx='80' ry='35'/%3E%3Cellipse class='c' cx='520' cy='520' rx='220' ry='140'/%3E%3Cellipse class='c' cx='520' cy='520' rx='180' ry='105'/%3E%3Cellipse class='c' cx='520' cy='520' rx='140' ry='72'/%3E%3Cellipse class='c' cx='520' cy='520' rx='100' ry='42'/%3E%3Cellipse class='c' cx='520' cy='100' rx='180' ry='110'/%3E%3Cellipse class='c' cx='520' cy='100' rx='140' ry='78'/%3E%3Cellipse class='c' cx='520' cy='100' rx='100' ry='50'/%3E%3Cellipse class='c' cx='80' cy='500' rx='200' ry='120'/%3E%3Cellipse class='c' cx='80' cy='500' rx='160' ry='88'/%3E%3Cellipse class='c' cx='80' cy='500' rx='120' ry='58'/%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
}
