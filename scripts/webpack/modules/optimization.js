import ImageminWebpackPlugin from "imagemin-webpack";

export const optimizeIMG = () => ({
  plugins: [
    new ImageminWebpackPlugin({
      imageminOptions: {
        plugins: [
          [
            "mozjpeg",
            {
              progressive: true,
              quality: 80,
            },
          ],
          [
            "pngquant",
            {
              quality: [0.6, 0.8],
            },
          ],
          "svgo",
        ],
      },
    }),
  ],
});
