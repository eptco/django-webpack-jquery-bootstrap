var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  context: __dirname,

  entry: {
    page1: './assets/js/page1',
    page2: './assets/js/page2', 
    bootstrap_sass: "bootstrap-sass"
  }, 

  output: {
      path: path.resolve('./assets/bundles/'),
      filename: "[name]-[hash].js",
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
    new webpack.ProvidePlugin({
      $: "jquery", 
      jQuery: "jquery", 
      jquery: "jquery"
    })
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }, // to transform JSX into JS
      { test: /\.(scss)?$/, loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'] }, 
      { test: /\.(css)?$/, loaders: 'css-loader?sourceMap' }, 
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }, 
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file-loader' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" }, 
   ],
  },

  resolve: {
      extensions: ['.js', '.jsx'],
      modules: [ path.resolve(__dirname, 'node_modules')] // modulesDirectories: ['node_modules', 'bower_components'], on Webpack 1
  }   
}