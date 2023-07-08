const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const publicDir = path.resolve(__dirname, "./public");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: publicDir + "/index.html",
      filename: "./index.html",
    }),
  ],
};
