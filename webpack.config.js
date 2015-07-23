var path = require('path')
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
      loader: 'style-loader!css-loader!autoprefixer-loader!stylus-loader'
    },
    {
      test: /.css$/,
      loader: 'css-loader!autoprefixer-loader!stylus-loader'
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
          'file?hash=sha512&digest=hex&name=/img/[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
}
