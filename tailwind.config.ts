import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#faf9f6',
        'bg-card': '#ffffff',
        text: '#262625',
        'text-muted': '#5c5c5c',
        border: '#e5e3da',
        accent: '#000000',
        'accent-hover': '#333333',
        error: '#c74444',
        success: '#3a7f5c',
        'gray-200': '#e5e5e5',
        'gray-300': '#d4d4d4',
        'gray-400': '#a3a3a3',
      },
      fontFamily: {
        sans: ['Source Sans 3', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Source Sans 3', 'Georgia', 'Times New Roman', 'serif'],
      },
      fontSize: {
        'h1': ['3rem', { lineHeight: '1.1' }],
        'h2': ['2rem', { lineHeight: '1.2' }],
        'h3': ['1.3rem', { lineHeight: '1.3' }],
        'body': ['1.125rem', { lineHeight: '1.6' }],
        'small': ['0.95rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '96': '6rem',
        '64': '4rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
        },
        screens: {
          '2xl': '1100px',
        },
      },
      maxWidth: {
        'content': '1100px',
        'narrow': '720px',
      },
    },
  },
  plugins: [],
}

export default config
