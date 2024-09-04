import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        'open-sans': ['var(--font-open-sans)'],
      },
      boxShadow: {
        'small-stars': Array.from(
          { length: 900 },
          () => `${Math.random() * 2000}px ${Math.random() * 2000}px theme('colors.white')`,
        ).join(', '),
        'medium-stars': Array.from(
          { length: 300 },
          () => `${Math.random() * 2000}px ${Math.random() * 2000}px theme('colors.white')`,
        ).join(', '),
        'big-stars': Array.from(
          { length: 100 },
          () => `${Math.random() * 2000}px ${Math.random() * 2000}px theme('colors.white')`,
        ).join(', '),
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
