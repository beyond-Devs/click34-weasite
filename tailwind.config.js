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
        brand: {
          50:  '#e8f0fb',
          100: '#c5d7f5',
          200: '#9bbcee',
          300: '#6fa0e7',
          400: '#4a8ae2',
          500: '#1a5fb4',
          600: '#164fa0',
          700: '#113d80',
          800: '#0d2d60',
          900: '#081d40',
        },
        dark: '#0a0f1e',
        light: '#f7f9ff',
        surface: '#ffffff',
        'surface-2': '#eef2ff',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body:    ['var(--font-body)', 'sans-serif'],
      },
      animation: {
        'fade-up':     'fadeUp 0.6s ease forwards',
        'fade-in':     'fadeIn 0.8s ease forwards',
        'pulse-slow':  'pulse 4s ease-in-out infinite',
        'float':       'float 6s ease-in-out infinite',
        'circuit':     'circuit 8s linear infinite',
        'glow':        'glow 3s ease-in-out infinite',
        'slide-right': 'slideRight 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to:   { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        circuit: {
          '0%':   { strokeDashoffset: 1000 },
          '100%': { strokeDashoffset: 0 },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(26,95,180,0.3)' },
          '50%':      { boxShadow: '0 0 60px rgba(26,95,180,0.7)' },
        },
        slideRight: {
          from: { transform: 'translateX(-20px)', opacity: 0 },
          to:   { transform: 'translateX(0)',     opacity: 1 },
        },
      },
      backgroundImage: {
        'circuit-pattern': "url('/circuit-bg.svg')",
        'gradient-radial':  'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': "linear-gradient(rgba(26,95,180,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(26,95,180,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
}
