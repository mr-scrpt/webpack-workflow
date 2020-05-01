module.exports = (api) => {
  const env = api.env();

  api.cache.using(() => process.env.NODE_ENV === "development");

  const plugins = ["dynamic-import-node"];

  if (env === "development") {
    plugins.push("react-hot-loader/babel");
  }
  return {
    presets: [
      [
        "@babel/env",
        {
          corejs: "2",
          useBuiltIns: "usage",
          shippedProposals: true,
          spec: true,
          loose: false,
          targets: {
            node: "current",
          },
        },
      ],
    ],
    plugins,
  };
};
