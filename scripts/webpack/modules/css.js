import env from "postcss-preset-env";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import cssnano from "cssnano";

const commonCSS = ({ sourceMap = false } = { sourceMap: false }) => ({
  loader: "css-loader",
  options: {
    sourceMap,
    modules: {
      localIdentName: "[local]--[hash:base64:5]",
    },
  },
});
const commonPOSTCSS = (
  { sourceMap = false, minify = false } = { sourceMap: false, minify: false }
) => {
  const plugins = [
    env({
      stage: 0,
      preserve: false,
      importFrom: ["./lib/postcss/variables.js"],
    }),
  ];
  if (minify) {
    plugins.push(cssnano);
  }
  return {
    loader: "postcss-loader",
    options: {
      sourceMap,
      plugins,
    },
  };
};

export const loadCSSDev = () => ({
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          commonCSS({ sourceMap: true }),
          commonPOSTCSS({ sourceMap: true, minify: false }),
        ],
      },
    ],
  },
});

export const loadCSSProd = () => ({
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          commonCSS({ sourceMap: false }),
          commonPOSTCSS({ sourceMap: false, minify: true }),
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[id].css",
      chunkFilename: "css/[name].[id].css",
    }),
  ],
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

/* export const loadCSS = () => ({
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

                   
                  ],
                }),
              ],
            },
          },
        ],
      },
    ],
  },
}); */
