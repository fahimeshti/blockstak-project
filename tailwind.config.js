/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3D00B7"
      },
      fontFamily: {
        'integralCF': ['IntegralCF', 'sans-serif'],
        'dmSans': ['DM Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}