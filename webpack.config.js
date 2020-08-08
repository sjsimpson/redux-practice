const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//   template: "./public/index.html",
//   filename: "index.html",
//   inject: "body"
// });

var config = {
  entry: "./src/app",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // TS loader potentially? (assuming we are not using babel-loader)
      // {
      //   test: /\.tsx?$/,
      //   loader: "ts-loader",
      //   exclude: /node_modules/
      // },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"]
      // },
      // File loader for loading file resources (images etc.)
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
      //   exclude: /node_modules/,
      //   use: ["file-loader?name=[name].[ext]"] // ?name=[name].[ext] is only necessary to preserve the original file name
      // }
    ]
  },
  // Dev Settings ("mode" is set in package.json)
  devServer: {
    historyApiFallback: true
  },
  // plugins: [
  //   HtmlWebpackPluginConfig
  // ]
}

module.exports = config;