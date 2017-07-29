const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src/js'),
  devtool: 'source-map',

  entry: {
    app: './app.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    publicPath: '/assets',
  },

  devServer: {
    contentBase: path.resolve(__dirname, './src'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] },
        }],
      },

      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },

      {
        test: /\.svg$/,
        use: 'raw-loader'
      }
    ],
  },
};
