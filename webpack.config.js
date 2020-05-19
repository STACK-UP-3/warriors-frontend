const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, 'dist'); // Define the distribution directory
var SRC_DIR = path.resolve(__dirname, 'src'); // Define the source directory

/**
 * HTML Webpack Plugin configuration
 */
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body',
});

/**
 * Webpack configuration setup
 */
var config = {
  entry: SRC_DIR + '/index.js',
  output: {
    path: DIST_DIR + '/app',
    filename: 'index.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [htmlWebpackPlugin],
};

module.exports = config;
