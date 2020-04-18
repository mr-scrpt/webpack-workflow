const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const { SOURCE_DIRECTORY, BUILD_DIRECTORY } = require("./constants");

const cleanOptions = {
  verbose: true,
};

module.exports = () => {
  return {
    entry: SOURCE_DIRECTORY,
    output: {
      path: BUILD_DIRECTORY,
    },
    mode: "none",
    devtool: false,
    module: {
      rules: [
        {
          test: /\.css/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./static/template.html",
        title: "Изучаем Webpack 🚀",
        favicon: "./static/favicon.png",
      }),
      new CleanWebpackPlugin(cleanOptions),
    ],
  };
};
