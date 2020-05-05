const { CleanWebpackPlugin } = require("clean-webpack-plugin");
import mearge from "webpack-merge";

// Constants
//const { BUILD_DIRECTORY } = require("../constants");

// Common config webpack
import getCommonConfig from "./webpack.common";

// Clean options
const cleanOptions = {
  verbose: true,
};

export default () => {
  return mearge(getCommonConfig(), {
    mode: "none",
    devtool: false,
    plugins: [new CleanWebpackPlugin(cleanOptions)],
  });
};
