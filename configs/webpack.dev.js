const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    publicPath: 'http://localhost:8080/', // atuto require 
  },

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
  },

  plugins: [
    new htmlWebpackPlugin({
      template: './src/frontend/index.html'
    }),
  ]
});