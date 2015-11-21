module.exports = {
  entry: [
    './app/src/index.js'
  ],
  output: {
    path: __dirname + '/app/build',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './app/build'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
