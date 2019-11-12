const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [{ loader: 'url-loader', options: { limit: 5000 } }]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  resolve: {
    alias: {
      vue$: isDev ? 'vue/dist/vue.runtime.js' : 'vue/dist/vue.runtime.min.js'
    },
    extensions: ['.js', '.vue']
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Vue Boilerplate with Webpack'
    })
  ]
}
