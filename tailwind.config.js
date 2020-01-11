const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        red: {
          ...colors.red,
          'red': '#f5e3e7',
        }
      }
    }
  }
}