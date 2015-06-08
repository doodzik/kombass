
var webpack = require('webpack')
module.exports = {
  entry: {
    path: __dirname + '/router',
    client: './router.jsx'
  },
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
