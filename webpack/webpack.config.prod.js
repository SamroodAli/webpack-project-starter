const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  devtool: "source-map",
  output: {
    filename: "main.js",
    path: path.resolve("dist"),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        loader: "file-loader",
        options: {
          outputPath: "assets",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "/src/index.html",
      inject: true,
    }),
  ],
};
