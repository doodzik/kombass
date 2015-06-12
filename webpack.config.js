
var webpack = require('webpack')
module.exports = {
  entry: __dirname + '/router/router.jsx',
  output: {
    path: __dirname + '/public/assets',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    {
      test: [/.jsx?$/, /.js?$/],
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    },
    {
      test: /.styl$/,
      loader: 'style-loader!css-loader!stylus-loader'
    }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
}
