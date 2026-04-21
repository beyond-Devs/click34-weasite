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
          50:  '#f0f2f9',
          100: '#e1e5f3',
          200: '#c3cae7',
          300: '#a5b0db',
          400: '#697cc1',
          500: '#161F64',
          600: '#151F59',
          700: '#111947',
          800: '#0d1335',
          900: '#080c23',
        },
        dark: '#000000',
        light: '#f7f9ff',
        surface: '#ffffff',
        'surface-2': '#f0f2f5',
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(22, 31, 100, 0.3)' },
          '50%':      { boxShadow: '0 0 60px rgba(22, 31, 100, 0.7)' },
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
