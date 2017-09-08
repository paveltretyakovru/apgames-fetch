const path = require('path');
const helpers = require('./helpers');
const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ContextReplacementPlugin = webpack.ContextReplacementPlugin;

module.exports = {
  entry: {
    polyfills: './src/frontend/polyfills.ts',
    vendor: './src/frontend/vendor.ts',
    app: './src/frontend/main.ts',
  },

  devtool: 'cheap-module-eval-source-map',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: { configFileName: helpers.root('tsconfig.json') },
          }, 'angular-router-loader', 'angular2-template-loader',
        ],
      },
      {
        test: /\.css$/,
        use: ['to-string-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?sourceMap'],
        })),
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      }
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [helpers.root('src/frontend'), 'node_modules'],
  },

  output: {
    path: helpers.root('dist'),
    filename: '[name].js',
  },

  resolveLoader: {
    modules: [
      helpers.root('node_modules'),
    ]
  },
  
  plugins: [
    new CheckerPlugin(),
    new ExtractTextPlugin('[name].css'),
    new webpack.ProvidePlugin({Reflect: 'core-js/es7/reflect'}),
    new ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/, helpers.root('src/frontend'), {}),
    new webpack.optimize.CommonsChunkPlugin({name: ['app', 'vendor', 'polyfills']}),
  ],
 };