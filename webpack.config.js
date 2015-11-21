var webpack = require('webpack');

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? '' : 'source-map',
  entry: [
    path.resolve(ROOT_PATH, 'app/src/index')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: process.env.NODE_ENV === 'production' ? path.resolve(ROOT_PATH, 'app/dist') : path.resolve(ROOT_PATH, 'app/build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(ROOT_PATH, 'app/build'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  module: {
    preLoaders: [
      {
        test: /.jsx?$/,
        loaders: ['eslint'],
        include: path.resolve(ROOT_PATH, 'app')
      }
    ],
    loaders: [
      {
        test: /.jsx?$/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
        exclude: /node_modules/
      },
      {
        test    : /\.scss$/,
        loaders : ['style', 'css', 'autoprefixer?browsers=last 2 version', 'sass']
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Holy Hotline'
    })
  ]
};
