module.exports = {
  plugins: [
    require('autoprefixer')({ grid: 'autoplace', browsers: ['>1%'] }),
    require('postcss-nested'),
    require('css-mqpacker')()
  ]
};
