const webpack = require('webpack')
const fs = require('fs')
const path = require('path')

const config = {
  entry: {
    bundle: path.resolve(__dirname, 'client/index.js')
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build/'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  target: 'web',
}

module.exports = config
