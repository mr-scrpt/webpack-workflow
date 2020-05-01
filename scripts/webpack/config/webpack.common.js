import HtmlWebpackPlugin from "html-webpack-plugin";
import { SOURCE_DIRECTORY, BUILD_DIRECTORY } from "../constants";
import env from "postcss-preset-env";

module.exports = () => {
  return {
    entry: SOURCE_DIRECTORY,
    output: {
      path: BUILD_DIRECTORY,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: "[local]--[hash:base64:5]",
                },
              },
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: [
                  env({
                    stage: 0,
                    preserve: false,
                    importFrom: [
                      "./lib/postcss/variables.js",

                      /* "./lib/postcss/custom-selector.js",
                      "./lib/postcss/media-query.js",
                      "./lib/postcss/custom-properties.js", */
                    ],
                    exportTo: ["./lib/postcss/custom-properties.js"],
                    /* features: {
                      "postcss-custom-media": {
                        importFrom: {
                          customMedia: {
                            "--small-viewport": "(max-width: 30em)",
                          },
                        },
                      },
                    }, */

                    /* features: {
                      "custom-media-queries": {
                        importFrom: [
                          {
                            customMedia: {
                              "--size-xls": "(width <= 479px)",
                              "--size-xs":
                                "(width >= 480px) and (width <= 575px)",
                              "--size-s":
                                "(width >= 576px) and (width <= 767px)",
                              "--size-m":
                                "(width >= 578px) and (width <= 991px)",
                              "--size-l":
                                "(width >= 992px) and (width <= 1199px)",
                              "--size-xl":
                                "(width >= 1200px) and (width <= 1919px)",
                              "--size-xxl": "(width >= 1920px)",
                            },
                          },
                        ],
                      }, 
                    },*/
                  }),
                ],
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./static/template.html",
        title: "Изучаем Webpack 🚀",
        favicon: "./static/favicon.png",
      }),
    ],
  };
};
