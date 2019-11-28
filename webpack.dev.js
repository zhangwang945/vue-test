const merge = require('webpack-merge');
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const html = require('html-webpack-plugin')
module.exports = {
  entry:'./src/index.js',
  output: {
    filename: '[name].[hash:6].js',
    chunkFilename: '[name].[hash:6].js',
    path: path.resolve(__dirname, 'dist'),
    pathinfo: false,

  },
  devtool: 'source-map',
  devServer: {
    host: 'localhost',
    contentBase: './dist',
    hot: true,
    //  useLocalIp: true,

  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 81920,
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                // mode: 'local',
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                context: path.resolve('src'),
                // hashPrefix: 'my-custom-hash',
              },
            },
          },
          'sass-loader'
        ],
      },
    ],
  },
  plugins: [
    // new MyPlugin(),
    new VueLoaderPlugin(),
    new html(
      {
        template:'src/index.html'
      }
    )
  ]
};