const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "index"),
  watch: true,
  output: {
    path: path.join(__dirname, "dist"),
    filename: "achtranfers.js",
    chunkFilename: "[chunk].js",
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "dist"),
        ],
        exclude: [
          path.resolve(__dirname, "node_modules"),
          path.resolve(__dirname, "coverage"),
          path.resolve(__dirname, "tools"),
        ],
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".json", ".js", ".jsx"],
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "/dist/"),
    inline: true,
    host: "localhost",
    port: 8080,
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
};
