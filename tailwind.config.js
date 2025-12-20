/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "purple": "#5917A7",
        "yellow": "#DEB226",
        "gray": "#858585",
        "light-mode": "#F6F0FF",
        "dark-mode": "#141414",
        "text-grey": "#CDCDCD"
      }
    },
    fontFamily: {
      ubuntu: ['var(--font-ubuntu)']
    }
  },
  darkMode: "class",
  plugins: [],
}
