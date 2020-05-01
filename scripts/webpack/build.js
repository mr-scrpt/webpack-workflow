// Core
import webpack from "webpack";
import chalk from "chalk";

// Config
import getConfigProd from "./config/webpack.prod";

const compiler = webpack(getConfigProd());

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
