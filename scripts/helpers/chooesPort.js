import chalk from "chalk";
import detectPort from "detect-port";
import inquier from "inquirer";

exports.chooesPort = async (portDefault) => {
  try {
    const port = await detectPort(portDefault);

    if (port === portDefault) {
      return Promise.resolve(port);
    }

    if (process.stdout.isTTY) {
      const questionName = "changePort";
      const question = {
        type: "confirm",
        name: questionName,
        message: chalk.yellowBright(`
          ⛳⛳⛳ Port ${portDefault} is already in use.⛳⛳⛳
          ❓❓❓Do you want to run the app on another port❓❓❓
        `),
        default: true,
      };

      const result = await inquier.prompt(question);

      if (result[questionName]) {
        return port;
      }

      return Promise.reject(` 
        ❗❗❗Port already in use❗❗❗
       `);
    }
  } catch (err) {
    Promise.reject(err);
  }
};
