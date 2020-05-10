import merge from "webpack-merge";
import { SOURCE_DIRECTORY, BUILD_DIRECTORY } from "../constants";
import * as modules from "../modules";
import { filename } from "../../helpers/filename";
export default () => {
  return merge(
    {
      entry: SOURCE_DIRECTORY,
      output: {
        path: BUILD_DIRECTORY,
        filename: filename().main,
        chunkFilename: filename().chunk,
        publicPath: "/",
        hashDigestLength: 5,
      },
    },
    modules.defineENVVariables(),
    modules.loadJS(),
    modules.loadIMG(),
    modules.loadSVG(),
    modules.loadFONTS(),
    modules.setHTML()
  );
};
