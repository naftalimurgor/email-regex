const path = require('path');
const webpack = require('webpack');
const copyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: './src/index.ts',

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: 'ts-loader'
      }
    ]
  },

  output: {
    
    filename: 'index.js',
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, 'lib')
  },

  resolve: {
    extensions: ['.ts']
  },
  plugins: [
    new copyWebpackPlugin({
      patterns: [
        { from: './package.json', to: './' },
        {from: 'README.md', to:'./'}
    ]
    }),
    
  ]
};
