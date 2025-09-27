import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],

  theme: {
    extend: {
      colors: {
        'coffee-brown': '#8B4513',
        'cream': '#F5F5DC',
        'dark-roast': '#3C2414',
        'gold-accent': '#D4AF37',
        'warm-white': '#FAF9F6',
        'light-brown': '#D2B48C',
        'espresso': '#2F1B14',

        coffee: {
          50: '#FAF9F6',
          100: '#F5F5DC',
          200: '#E8D5B7',
          300: '#D2B48C',
          400: '#CD853F',
          500: '#8B4513',
          600: '#6B3410',
          700: '#4A240B',
          800: '#3C2414',
          900: '#2F1B14',
          950: '#1A0F0A'
        },

        accent: {
          50: '#FFFEF7',
          100: '#FDF6CD',
          200: '#FBEC9B',
          300: '#F7DD69',
          400: '#F1CD3D',
          500: '#D4AF37',
          600: '#B8932A',
          700: '#9C771E',
          800: '#805B13',
          900: '#5A3F0D'
        }
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace']
      },

      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },

      keyframes: {
        'steam': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)', opacity: '0.7' },
          '50%': { transform: 'translateY(-10px) rotate(5deg)', opacity: '1' }
        },
        'brew': {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '0.8' }
        }
      },

      animation: {
        'steam': 'steam 3s ease-in-out infinite',
        'brew': 'brew 2s ease-in-out infinite'
      },

      boxShadow: {
        'coffee': '0 4px 14px 0 rgba(139, 69, 19, 0.15)',
        'coffee-lg': '0 10px 25px -3px rgba(139, 69, 19, 0.1), 0 4px 6px -2px rgba(139, 69, 19, 0.05)',
        'warm': '0 4px 14px 0 rgba(212, 175, 55, 0.15)'
      },

      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem'
      }
    }
  },

  plugins: [


  ],

  darkMode: 'class'
}