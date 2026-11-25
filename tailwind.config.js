/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050B1F',
        navy: {
          DEFAULT: '#0B1440',
          dark: '#070E2C',
          light: '#13215C',
        },
        surface: {
          DEFAULT: '#0F1B3D',
          card: '#0F1B3D',
          elevated: '#15244F',
          subtle: '#09122C',
        },
        logoBlue: {
          DEFAULT: '#0A5CFF',
          hover: '#256DFF',
          dark: '#0848CC',
        },
        cyanAccent: {
          DEFAULT: '#22D3EE',
          glow: 'rgba(34, 211, 238, 0.35)',
          subtle: 'rgba(34, 211, 238, 0.12)',
        },
        gold: {
          DEFAULT: '#F5B83D',
          light: '#FFD98A',
          hover: '#E5A932',
          glow: 'rgba(245, 184, 61, 0.3)',
          subtle: 'rgba(245, 184, 61, 0.1)',
        },
        slateText: {
          DEFAULT: '#F5F7FF',
          muted: '#9AA7C7',
          dim: '#627199',
        },
        borderBase: 'rgba(255, 255, 255, 0.08)',
        borderHover: 'rgba(255, 255, 255, 0.16)',
        borderCyan: 'rgba(34, 211, 238, 0.25)',
        borderGold: 'rgba(245, 184, 61, 0.3)',
      },
      fontFamily: {
        display: ['Sora', 'Space Grotesk', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F5B83D 0%, #FFD98A 100%)',
        'gold-gradient-hover': 'linear-gradient(135deg, #E5A932 0%, #F5B83D 100%)',
        'blue-gradient': 'linear-gradient(135deg, #0A5CFF 0%, #22D3EE 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(15, 27, 61, 0.85) 0%, rgba(11, 20, 64, 0.95) 100%)',
        'mesh-glow': 'radial-gradient(circle at 50% 0%, rgba(10, 92, 255, 0.22) 0%, rgba(34, 211, 238, 0.12) 35%, transparent 70%)',
        'hero-gold-glow': 'radial-gradient(circle at 80% 20%, rgba(245, 184, 61, 0.14) 0%, transparent 50%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(34, 211, 238, 0.3)',
        'glow-gold': '0 0 25px -5px rgba(245, 184, 61, 0.35)',
        'glow-blue': '0 0 30px -5px rgba(10, 92, 255, 0.4)',
        'card-elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
