const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

require('dotenv').config();

var DIST_DIR = path.resolve(__dirname, 'dist'); // Define the distribution directory
var SRC_DIR = path.resolve(__dirname, 'src'); // Define the source directory

/**
 * HTML Webpack Plugin configuration
 */
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  favicon: './src/assets/favicon.png',
  inject: 'body',
});

/**
 * Webpack configuration setup
 */
module.exports = (env) => {
  const isProduction = env === 'production';

  return {
    entry: SRC_DIR + '/index.js',
    output: {
      path: DIST_DIR,
      filename: 'index.bundle.js',
      publicPath: '/',
    },
    module: {
      rules: [
        // Bundle scripts
        {
          test: /\.(js|jsx)$/,
          include: SRC_DIR,
          exclude: /node_modules/,
          use: 'babel-loader',
        },

        // Bundle styles
        {
          test: /\.(scss|css)$/,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                url: false,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },

        // Bundle images
        {
          test: /\.(png|jpeg|jpg|gif|svg)$/,
          use: 'file-loader',
        },

        // Bundle fonts
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          use: 'file-loader',
        },
      ],
    },

    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',

    devServer: {
      historyApiFallback: true,
    },

    plugins: [
      htmlWebpackPlugin,
      new MiniCssExtractPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          API_BASE_URL: JSON.stringify(process.env.API_BASE_URL),
        },
      }),
    ],
  };
};
