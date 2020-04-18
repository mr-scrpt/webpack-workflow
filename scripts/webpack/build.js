// Core
const webpack = require("webpack");
const chalk = require("chalk");

// Config
const config = require("./webpack.config");

const compiler = webpack(config());

compiler.run((err, stats) => {
  if (err) {
    console.error(err.stack || error);
    err.details && console.error(err.details);
    return null;
  }

  const info = stats.toString({
    hash: true,
    modules: false,
    colors: true,
    version: false,
    entrypoints: false,
    env: true,
    children: false,
  });

  console.log(chalk.greenBright("✓✓✓ Build completed"));
  console.log(info);

  stats.hasErrors() &&
    (console.log(chalk.redBright("-> ⚠⚠⚠ Error!!!")), console.error(info));
  stats.hasWarnings() &&
    (console.log(chalk.yellowBright("-> ⚠⚠⚠ Warning!!!")), console.error(info));
});
