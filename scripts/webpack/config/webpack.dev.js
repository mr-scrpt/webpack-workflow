import mearge from "webpack-merge";

// Common config webpack
import getCommonConfig from "./webpack.common";

export default () => {
  return mearge(getCommonConfig(), {
    mode: "none",
    devtool: "cheap-module-eval-source-map",
    plugins: [],
  });
};
