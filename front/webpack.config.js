var webpack = require('webpack')

module.exports = {
  entry: './index',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
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
  },
  externals : {
    'Config' : JSON.stringify(require('./config/config.development.js'))
  },
  devServer: {
    hot: true,
    //host: "192.168.0.8",
    host: "0.0.0.0",
    port: 4000,
    inline: true,
    historyApiFallback: true,
  }
}

