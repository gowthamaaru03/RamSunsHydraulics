const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: './src/main.jsx',
  output: { path: path.resolve(__dirname, 'dist'), filename: 'js/[name].[contenthash].js', chunkFilename: 'js/[name].[contenthash].js', publicPath: '', clean: true },
  module: { rules: [{ test: /\.html$/i, include: path.resolve(__dirname, 'src'), type: 'asset/source' }] },
  resolve: { extensions: ['.js', '.jsx'] },
  plugins: [new HtmlWebpackPlugin({ template: './index.html', inject: 'body', scriptLoading: 'defer' }), new CopyWebpackPlugin({ patterns: [{ from: 'public', to: '.' }] })],
  devServer: { port: 3000, hot: false, liveReload: true, static: false, historyApiFallback: false }
};
