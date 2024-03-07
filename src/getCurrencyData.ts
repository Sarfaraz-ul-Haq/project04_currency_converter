import inquirer from "inquirer";
import chalk from "chalk";
import CurrencyData from "./interface.js";

async function getCurrencyData(): Promise<CurrencyData> {
  const currencyData = await inquirer.prompt([
    {
      name: "convertFrom",
      type: "list",
      choices: ["USD", "PKR", "SAR", "EUR"],
      message: chalk.green(`\n Choose a currency to convert from:`),
    },

    {
      name: "amount",
      type: "number",
      message: chalk.green(`\n Enter your amount`),
    },

    {
      name: "convertTo",
      type: "list",
      choices: ["USD", "PKR", "SAR", "EUR"],
      message: chalk.green(`\n Choose a currency to convert to:`),
    },
  ]);
  const { convertFrom, amount, convertTo } = currencyData;
  return { convertFrom, amount, convertTo };
}

export default getCurrencyData;
