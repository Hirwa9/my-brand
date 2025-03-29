/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    fontFamily: {
      primary: 'var(--font-jetbrainsMono)',
    },
    extend: {
      colors: {
        primary: '#313133',

        // primary: '#71b3b3',

        accent: {
          DEFAULT: '#71b3b3',
          hover: '#458484',

          // DEFAULT: '#1c1c22',
          // hover: '#3b3b48',

        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        "accordion-up": {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      // animation: {
      //   "accordion-down": {
      //     from: { height: 0 },
      //     to: { height: 'var(--radix-accordion-content-height)' },
      //   },
      //   "accordion-up": {
      //     from: { height: 'var(--radix-accordion-content-height)' },
      //     to: { height: 0 },
      //   },
      // },
    },
  },
  plugins: [],
}

