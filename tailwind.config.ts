import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'slate-dark': '#191919',
        'slate-medium': '#262625',
        'slate-light': '#40403E',
        'cloud-dark': '#666663',
        'cloud-medium': '#91918D',
        'cloud-light': '#BFBFBA',
        'ivory-dark': '#E5E4DF',
        'ivory-medium': '#F0F0EB',
        'ivory-light': '#FAFAF7',
        'book-cloth': '#BF4D43',
        'kraft': '#D4A27F',
        'manilla': '#EBDBBC',
        'focus': '#61AAF2',
        'error': '#BF4D43',
        'bg': '#FAFAF7',
        'bg-card': '#FFFFFF',
        'text': '#191919',
        'text-muted': '#666663',
        'border': '#E5E4DF',
        'accent': '#D92A1C',
        'accent-hover': '#023D87',
        'ink': '#191919',
        'off-white': '#F0F0EB',
        'warm-mid': '#E5E4DF',
        'muted': '#91918D',
        'accent-blue': '#61AAF2',
        'accent-purple': '#7c4dff',
        'accent-teal': '#008b8b',
        'accent-green': '#2a9e62',
        'success': '#3a7f5c',
        'gray-200': '#E5E4DF',
        'gray-300': '#D4D4D4',
        'gray-400': '#91918D',
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['var(--font-lato)', 'Georgia', 'Times New Roman', 'serif'],
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
