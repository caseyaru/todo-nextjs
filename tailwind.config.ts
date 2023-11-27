import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#881337',
        'pink': '#fda4af',
        'yellow': '#facc15',
      },
    },
    fontFamily: {
      'body': ['Souvienne Bold', 'sans-serif'],
    }
  },
  plugins: [],
}
export default config
