var webpack = require('webpack');

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
  entry: [
    path.resolve(ROOT_PATH, 'app/src/index.js')
  ],
  output: {
    path: path.resolve(ROOT_PATH, 'app/build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(ROOT_PATH, 'app/build')
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Holy Hotline'
    })
  ]
};
