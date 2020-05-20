const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
/* Webpack configuration setup     
*/

module.exports =(env)=> {
    const isProduction = env === 'production';
    return{
        entry: SRC_DIR + '/index.js',
        output: {
          path: DIST_DIR,
          filename: 'index.bundle.js',
          publicPath: '/',
        },
        module: {
          rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                     {
                       loader: MiniCssExtractPlugin.loader,
                     },
                     {
                         loader: "css-loader",
                         options: {
                             sourceMap: true,
                         }
                     },
                     {
                         loader: "sass-loader",
                         options:{
                             sourceMap: true,
                         }
                     }

                     ],
              },
              {
                test: /\.(js|jsx)$/,
                include: SRC_DIR,
                exclude: /node_modules/,
                use: 'babel-loader',
              },
              {
                test: /\.(png|jpeg|jpg|gif|svg)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {},
                  },
                ],
              },
              {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
            ],
          },
    
          devtool: isProduction ? 'source-map':'cheap-module-eval-source-map',
    
          devServer: {
            historyApiFallback: true,
          },
          plugins: [
              htmlWebpackPlugin,
              new MiniCssExtractPlugin, 
            ],
    }
    };
