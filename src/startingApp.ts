import chalk from "chalk";
import { createSpinner } from "nanospinner";

async function startingApp(): Promise<boolean> {
  return new Promise((resolve) => {
    const spinner = createSpinner(chalk.green(` Starting App...`)).start();

    setTimeout(() => {
      spinner.stop();
      resolve(true);
    }, 3000);
  });
}

export default startingApp;
