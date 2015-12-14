var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './build', 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'babel-loader',
          'ng-annotate-loader'
        ],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  }
};

