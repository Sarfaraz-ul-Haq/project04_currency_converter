import inquirer from "inquirer";
import chalk from "chalk";
import main from "./app.js";
import thanks from "./thanks.js";

async function useAppAgain(): Promise<void> {
  const useAppOrQuit = await inquirer.prompt({
    name: "selected",
    type: "list",
    choices: ["Use App", "Quit"],
    message: chalk.green(`\n Do you want to use app again or quit?`),
  });
  if (useAppOrQuit.selected == "Use App") {
    main();
  } else {
    thanks();
  }
}

export default useAppAgain;
