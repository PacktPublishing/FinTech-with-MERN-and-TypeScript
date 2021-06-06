const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "index"),
  watch: true,
  output: {
    path: path.join(__dirname, "dist"),
    filename: "dist.js",
    chunkFilename: "[chunk].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "api")
        ],
        exclude: [
          path.resolve(__dirname, "node_modules"),
          path.resolve(__dirname, "coverage"),
          path.resolve(__dirname, "tools"),
          path.resolve(__dirname, "build")
        ],
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".json", ".js"],
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    inline: true,
    host: "localhost",
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })]
}
