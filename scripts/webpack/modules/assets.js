import HtmlWebpackPlugin from "html-webpack-plugin";

export const setHTML = () => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: "./static/template.html",
      title: "Изучаем Webpack 🚀",
      favicon: "./static/favicon.png",
    }),
  ],
});

export const loadIMG = () => ({
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: `img/[name].[ext]`,
        },
      },
    ],
  },
});

export const loadSVG = () => ({
  module: {
    rules: [
      {
        test: /\.svg$/i,
        issuer: {
          test: /\.js$/,
        },
        use: [
          "@svgr/webpack",
          {
            loader: "file-loader",
            options: {
              name: `image/svg/[name].[ext]`,
            },
          },
        ],
      },
      {
        test: /\.svg$/i,
        issuer: {
          test: /\.css$/,
        },
        use: [
          "@svg/webpack",
          {
            loader: "file-loader",
            options: {
              name: `image/svg/[name].[ext]`,
            },
          },
        ],
      },
    ],
  },
});

export const loadFONTS = () => ({
  module: {
    rules: [
      {
        test: /\.(woff(2)?|ttf|eot)$/i,
        loader: "file-loader",
        options: {
          name: `fonts/[name].[ext]`,
        },
      },
    ],
  },
});
