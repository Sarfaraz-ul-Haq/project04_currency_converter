import inquirer from "inquirer";
import chalk from "chalk";
import CurrencyData from "./interface.js";

async function getCurrencyData() {
  const currencyData = await inquirer.prompt([
    {
      name: "convertFrom",
      type: "list",
      choices: ["USD", "PKR", "SAR", "EUR"],
      message: chalk.green(`\n Choose a currency to convert from:`),
    },

    {
      name: "convertTo",
      type: "list",
      choices: ["USD", "PKR", "SAR", "EUR"],
      message: chalk.green(`\n Choose a currency to convert to:`),
    },
    {
      name: "amount",
      type: "number",
      message: chalk.green(`\n Enter your amount`),
    },
  ]);

  return currencyData;
}

export default getCurrencyData;
