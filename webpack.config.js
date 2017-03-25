var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
    },
    extensions: ['.js']
  },
  devtool: "inline-source-map",
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        query: {
          presets: ['latest', 'react']
        },
        exclude: /(node-modules)/
      }
    ]
  }
};
