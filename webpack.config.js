var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './build', 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  clean: {
    react : ['node_modules/**/react','!node_modules/react']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.jsx', '.scss', '.js', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [
          'babel-loader',
          'ng-annotate-loader'
        ],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.html$/,
        loader: 'raw'
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          require.resolve('css-loader') + '?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]',
          'sass-loader'
        ]
      }
    ]
  },
  postcss: function () {
    return [require('precss')];
  }
};

