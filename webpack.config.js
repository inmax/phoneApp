const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = () => {
  return {
    entry: "./src/index.tsx",
    target: "web",
    mode: "development",
    output: {
      path: path.resolve("//" + __dirname, "build"),
      publicPath: '/',
      filename: "bundle.js",
    },
    resolve: {
      extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },
    devServer: {
      contentBase: "./build",
      historyApiFallback: true
    },
    devtool: "source-map",
    module: {
      rules: [
        { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
        { test: /\.css$/, use: ["style-loader", "css-loader", "sass-loader"] },
        { test: /\.tsx?$/, loader: "babel-loader" },
        { test: /\.tsx?$/, loader: "ts-loader" },
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve("//" + __dirname, "src", "index.html"),
      }),
      new MiniCssExtractPlugin({
        filename: "./src/app.css",
      }),
      new Dotenv(),
    ],
  };
};
