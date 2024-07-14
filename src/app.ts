import startingApp from "./startingApp.js";
import displayTitleAndTagline from "./displayTitle.js";
import convertCurrency from "./convertCurrency.js";
import useAppAgain from "./useAppAgain.js";
import getCurrencyData from "./getCurrencyData.js";

async function main() {
  await startingApp();
  await displayTitleAndTagline();
  await getCurrencyData();
  await convertCurrency();
  useAppAgain();
}

main();

export default main;
