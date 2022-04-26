module.exports = {
  content: [],
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      borderRadius: {
        'sr-14': '14px'
      },
      boxShadow: {
        'sr-drop-shadow': '2px 0px 16px rgba(1, 47, 45, 0.04)'
      },
      colors: {
        'sr-green': '#04C99E',
        'sr-bg': '#F5F5F5',
        'sr-primary': '#272A2A',
        'sr-secondary': '#717A7A',
        'sr-placeholder': '#A5ABAB',
        'sr-read-only': '#E9E9E9',
        'sr-icon': '#C9C9C9'
      },
      spacing: {
        '14px': '14px'
      }
    },
  },
  plugins: [],
}
