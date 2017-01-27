var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./build/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "gradientsky.min.js"
  },
  module: {
        loaders: [
            {
                test: /\.glsl$/,
                loader: 'webpack-glsl'
            }
        ]
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};