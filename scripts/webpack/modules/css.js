import env from "postcss-preset-env";

export const loadCSS = () => ({
  module: {
    rules: [
      {
        test: /\.css$/i,
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
                }),
              ],
            },
          },
        ],
      },
    ],
  },
});

export const loadSASS = () => ({
  module: {
    rules: [
      {
        test: /\.scss$/i,
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
          "sass-loader",
        ],
      },
    ],
  },
});
