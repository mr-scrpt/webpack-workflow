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
          name: `img/[name].[hash:5].[ext]`,
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
              name: `img/svg/[name].[hash:5].[ext]`,
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
          "@svgr/webpack",
          {
            loader: "file-loader",
            options: {
              name: `img/svg/[name].[hash:5].[ext]`,
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
          name: `fonts/[name].[hash:5].[ext]`,
        },
      },
    ],
  },
});
