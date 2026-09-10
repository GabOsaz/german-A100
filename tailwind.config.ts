import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        ink: '#eef1f4',
        'ink-dim': '#9aa7b3',
        panel: '#1b232c',
        panel2: '#222c37',
        gold: '#d4a94e',
        'gold-dim': '#8a723a',
        line: '#2c3742',
        good: '#5c9a6b',
        bad: '#c0473f',
      },
      fontFamily: {
        display: ['Georgia', '"Times New Roman"', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
