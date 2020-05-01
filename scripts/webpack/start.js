// Core
import webpack from "webpack";
import DevServer from "webpack-dev-server";
import hot from "webpack-hot-middleware";
import chalk from "chalk";
import { chooesPort } from "../helpers/chooesPort";
// Config
import getConfigDev from "./config/webpack.dev";

// Constants
import { HOST, PORT } from "./constants";

const compiler = webpack(getConfigDev());

(async () => {
  try {
    const portSelected = await chooesPort(PORT);

    const server = new DevServer(compiler, {
      host: HOST,
      port: portSelected,
      historyApiFallback: true,
      overlay: true,
      quiet: true,
      clientLogLevel: "none",
      noInfo: true,
      liveReload: true,
    });

    server.listen(portSelected, HOST, () => {
      console.log(`
        ${chalk.greenBright(
          "⚡⚡⚡ Dev Server listening on"
        )} ${chalk.blueBright(`http://${HOST}:${portSelected} ⚡⚡⚡`)}
      `);
    });
  } catch (err) {
    console.log(`
      ${chalk.yellowBright(`
        ❌❌❌Impossible run the app❌❌❌
        `)}
      `);
    console.log(chalk.redBright(err.message || err));
  }
})();
