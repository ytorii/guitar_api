var webpack = require('webpack')

module.exports = {
  entry: './index',
  output: {
    path: '/home/pi3_test2/rails/practice/guitar_api/app/assets/javascripts',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  externals : {
    'Config' : JSON.stringify(require('./config/config.production.js'))
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: [
        'react-hot-loader',
        'babel-loader'
      ]
    }
    ]
  }
}

