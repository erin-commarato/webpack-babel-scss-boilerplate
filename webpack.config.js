// output path must be absolute, so we use a node js helper
// "path module" to generate the path via path.resolve(__dirname, 'build')
const path = require('path');

//extract text from bundle into separate file
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  //filename: "[name].[contenthash].css",
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development"
});

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
      },{
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'url'
      }
    ]
  },
  plugins: [
          extractSass
      ]
};

module.exports = config;
