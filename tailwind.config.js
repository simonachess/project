/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : '#2D2D2D',
        default: {
          10: '#FFFFFF',
          50: '#F4F4F4',
          100: '#E9E9E9',
          300: '#757575',
          700: '#3A3A3A',
          800: '#1F1F1F',
          900: '#050505',
        },
        error: '#FF5252',
        accent: '#A445ED',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'serif': ['Lora', 'ui-serif', 'Georgia'],
        'mono': ['Inconsolata', 'ui-monospace', 'SFMono-Regular'],
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}