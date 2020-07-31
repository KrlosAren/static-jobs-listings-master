const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const webpack = require('webpack')

module.exports = {
  entry:{
    app: path.resolve(__dirname,'./src/app.js'),
  } ,
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].js'
  },
  devServer: {
    open: true,
    port: 9000,
    hot: true,
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.pug$/,
        use : [
          {
            loader: 'pug-loader',
            options: {
              pretty: true,
            }
          }
        ]
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        loader: 'file-loader',
        options: {
          outputPath: './src/assets/',
          name: '[name].[ext]',
        },
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      filename: 'index.html',
      template: path.resolve(__dirname, './src/pug/index.pug')
    }),
    new HtmlWebpackHarddiskPlugin()
  ]
}