const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const common = require("./common");

module.exports = {
  mode: "development",
  devtool: "source-map",

  entry: [
    "@babel/polyfill",
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    ...common.entry
  ],

  output: Object.assign({}, common.output, {
    filename: "[name].js",
    publicPath: "/"
  }),

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlPlugin(common.htmlPluginConfig)
  ],

  module: {
    noParse: /strclass\.min\.js$/,
    rules: [
      common.jsLoader,
      common.cssLoader,
      common.fileLoader,
      common.urlLoader
    ]
  },

  resolve: common.resolve
};
