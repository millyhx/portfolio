export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      fontFamily: {
        bungee: ['"Bungee"', 'cursive'],
        sans: ['system-ui', 'sans-serif']
      },
      colors: {
        accent: '#ff7ad9',
        accent2: '#7afcff'
      }
    }
  }
}
