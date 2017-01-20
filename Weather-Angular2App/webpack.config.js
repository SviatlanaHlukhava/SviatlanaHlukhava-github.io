var webpack = require('webpack');

module.exports = {  
  entry: './app.ts',
  output: {
    filename: 'bundle.js'
  },
  publicPath: '/',
  // Turn on sourcemaps
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader?keepUrl=true'] },
      { test: /\.css$/, loaders: ['to-string-loader', 'css-loader?url=false'] },
      { test: /\.html$/, loader: "raw-loader" },
      { test: /\.png$/, loader: "file-loader" }
    ],
    preLoaders: [
      { test: /\.ts$/, loader: 'tslint-loader' }
    ]
  },
  devServer: {
    hot: true
  },
  tslint: {
    configFile: './tslint.json'
  }
}