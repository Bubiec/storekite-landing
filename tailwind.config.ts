import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,ts,js}',
    './components/**/*.{vue,ts,js}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0F',
        card: '#111118',
        card2: '#13131C',
        border: '#1F1F2E',
        violet: {
          DEFAULT: '#7C3AED',
          light: '#A78BFA',
          dark: '#4C1D95',
        },
        emerald: {
          DEFAULT: '#10B981',
          light: '#34D399',
        },
        muted: '#6B7280',
        'muted-light': '#9CA3AF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
