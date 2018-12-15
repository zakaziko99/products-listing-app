const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let config = {
  entry : './src/index.js',
  output : {
    filename : 'main.js',
    path : path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },
  devtool: devMode ? 'source-map' : false,
  mode: devMode ? 'development' : 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
      path: path.resolve(__dirname, 'dist')
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer({
            browsers: [
              '>1%',
              'last 4 versions',
              'not dead',
              'not ie < 10'
            ]
          })
        ]
      }
    })
  ]
};

module.exports = config;
