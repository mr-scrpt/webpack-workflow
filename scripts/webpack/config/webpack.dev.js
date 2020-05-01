import mearge from "webpack-merge";

// Common config webpack
import getCommonConfig from "./webpack.common";

module.exports = () => {
  return mearge(getCommonConfig(), {
    mode: "none",
    devtool: false,
    plugins: [],
  });
};
