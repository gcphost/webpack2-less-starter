const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    css: './src/less/app.less'
  },
  output: {
    path: path.join(__dirname, 'resources'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      },
      {
        test: /\.less$/,
        loader:ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!less-loader' })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    })
  ]
}
