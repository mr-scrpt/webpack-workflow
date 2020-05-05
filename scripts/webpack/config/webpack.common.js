import { SOURCE_DIRECTORY, BUILD_DIRECTORY } from "../constants";

import merge from "webpack-merge";
import * as modules from "../modules";
export default () => {
  return merge(
    {
      entry: SOURCE_DIRECTORY,
      output: {
        path: BUILD_DIRECTORY,
      },
    },
    modules.loadJS(),
    modules.loadCSS(),
    modules.loadSASS(),
    modules.loadIMG(),
    modules.loadSVG(),
    modules.loadFONTS(),
    modules.setHTML()
  );
};
