import { HotModuleReplacementPlugin } from "webpack";
import WebpackBar from "webpackbar";
import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export const connectBuildProgressIndicator = () => ({
  plugins: [new WebpackBar()],
});

export const connectFriendlyErrors = () => ({
  plugins: [new FriendlyErrorsWebpackPlugin()],
});
export const connectHMR = () => ({
  plugins: [new HotModuleReplacementPlugin()],
});
export const cleanDirectories = () => ({
  plugins: [new CleanWebpackPlugin()],
});

export const connectBundleAnalyzer = () => ({
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "disabled",
      openAnalyzer: false,
      generateStatsFile: true,
    }),
  ],
});
