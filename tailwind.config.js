/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "primary": "#cf4899",
        "secondary": "#072B4F",
        "match": "#0B5A25",
        "match-finish": "rgba(22, 30, 38, 1)",
        "overlay": "rgba(0, 0, 0, 0.6)",
        "card1": "rgba(11, 90, 37, 1)",
        "card2": "rgba(18, 70, 73, 1)",
        "card3": "rgba(50, 117, 181, 1)",
        "card4": "rgba(64, 8, 55, 1)",
        "card5": "rgba(140, 7, 55, 1)"
      }
    },
  },
  plugins: [],
}
