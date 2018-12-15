const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';

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
      }
    ]
  },
  devtool: devMode ? 'source-map' : false,
  mode: devMode ? 'development' : 'production'
};

module.exports = config;
