import mearge from "webpack-merge";
import * as modules from "../modules";
// Common config webpack
import getCommonConfig from "./webpack.common";

export default () => {
  return mearge(
    getCommonConfig(),
    {
      mode: "none",
      devtool: false,
    },
    modules.cleanDirectories(),
    modules.connectBuildProgressIndicator(),
    modules.loadCSSProd(),
    modules.optimizeIMG(),
    modules.connectBundleAnalyzer()
    //modules.loadSASS()
  );
};
