const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const pathsToClean = ["dist"];
const cleanOptions = {
  verbose: true,
};

module.exports = () => {
  return {
    mode: "none",
    devtool: false,
    plugins: [
      new HtmlWebpackPlugin({
        template: "./static/template.html",
        title: "Изучаем Webpack 🚀",
        favicon: "./static/favicon.png",
      }),
      new CleanWebpackPlugin({
        verbose: true,
      }),
    ],
  };
};
