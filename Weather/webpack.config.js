var webpack = require('webpack');
module.exports = {  
  entry: './app.ts',
  output: {
    filename: 'bundle.js'
  },
  // Turn on sourcemaps
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts' },
      { test: /\.css$/, loader: "style!css" }
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