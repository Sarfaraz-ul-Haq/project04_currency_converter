import promptUserToEnterCurrencyData from "./getCurrencyData.js";
import conversionRates from "./conversionRates.js";
import chalk from "chalk";

async function convertCurrency(): Promise<void> {
  const { convertFrom, amount, convertTo } =
    await promptUserToEnterCurrencyData();
  if (convertFrom == "USD" && convertTo == "PKR") {
    console.log(
      chalk.gray(
        `\n $${amount} USD are equal to ${
          amount * conversionRates.PKR
        } Pakistani rupees.`
      )
    );
  } else if (convertFrom == "USD" && convertTo == "SAR") {
    console.log(
      chalk.gray(
        `\n $${amount} USD are equal to ${
          amount * conversionRates.SAR
        } Saudi Riyal.`
      )
    );
  } else {
    console.log(
      chalk.gray(
        `\n $${amount} USD are equal to ${amount * conversionRates.EUR} Euros.`
      )
    );
  }
}

export default convertCurrency;
