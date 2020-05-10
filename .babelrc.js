module.exports = (api) => {
  const env = api.env();
  api.cache.using(() => process.env.NODE_ENV === "development");
  const plugins = ["@babel/proposal-class-properties"];

  if (env === "development") {
    plugins.push("react-hot-loader/babel");
  }
  return {
    presets: [
      "@babel/react",
      [
        "@babel/env",
        {
          debug: false,
          spec: true,
          loose: false,
          modules: "auto", // для старых проектов  false
          corejs: "2",
          useBuiltIns: "usage",
        },
      ],
    ],
    plugins,
  };
};
