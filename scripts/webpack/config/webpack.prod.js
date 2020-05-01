const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const mearge = require("webpack-merge");

// Constants
//const { BUILD_DIRECTORY } = require("../constants");

// Common config webpack
const getCommonConfig = require("./webpack.common");

// Clean options
const cleanOptions = {
  verbose: true,
};

module.exports = () => {
  return mearge(getCommonConfig(), {
    mode: "none",
    devtool: false,

    plugins: [new CleanWebpackPlugin(cleanOptions)],
  });
};
