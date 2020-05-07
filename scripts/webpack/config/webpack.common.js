import merge from "webpack-merge";
import { DefinePlugin } from "webpack";

import { SOURCE_DIRECTORY, BUILD_DIRECTORY } from "../constants";
import * as modules from "../modules";

export default () => {
  const { NODE_ENV } = process.env;
  return merge(
    {
      entry: SOURCE_DIRECTORY,
      output: {
        path: BUILD_DIRECTORY,
        filename: "js/bundle.js",
        publicPath: "/",
      },
      plugins: [
        new DefinePlugin({
          __ENV__: JSON.stringify(NODE_ENV),
          __DEV__: NODE_ENV === "development",
          __STAGE__: NODE_ENV === "stage",
          __PROD__: NODE_ENV === "production",
        }),
      ],
    },
    modules.loadJS(),
    modules.loadIMG(),
    modules.loadSVG(),
    modules.loadFONTS(),
    modules.setHTML()
  );
};
