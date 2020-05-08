import ImageminWebpackPlugin from "imagemin-webpack";
import TerserPlugin from "terser-webpack-plugin";

export const optimizeBuild = () => ({
  optimization: {
    nodeEnv: "production",
    minimize: false,
    minimizer: [new TerserPlugin()],
    noEmitOnErrors: true,
    removeEmptyChunks: true,
    mergeDuplicateChunks: true,
    removeAvailableModules: true,
    occurrenceOrder: true,
    concatenateModules: true,
    providedExports: true,
    usedExports: true,
    sideEffects: true,
    namedModules: false,
    moduleIds: false,
    namedChunks: false,
    chunkIds: false,
  },
});

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
