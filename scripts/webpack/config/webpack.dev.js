import mearge from "webpack-merge";
import * as modules from "../modules";
// Common config webpack
import getCommonConfig from "./webpack.common";

export default () => {
  return mearge(
    getCommonConfig(),
    {
      mode: "none",
      devtool: "cheap-module-eval-source-map",
      plugins: [],
    },
    modules.connectHMR(),
    modules.connectFriendlyErrors(),
    modules.loadCSSDev(),
    modules.loadSASS()
  );
};
