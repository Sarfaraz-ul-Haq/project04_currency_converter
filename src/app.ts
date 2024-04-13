import startingApp from "./startingApp.js";
import displayTitleAndTagline from "./displayTitle.js";
import convertCurrency from "./convertCurrency.js";
import useAppAgain from "./useAppAgain.js";

async function main() {
  await startingApp();
  await displayTitleAndTagline();
  await convertCurrency();
  await useAppAgain();
}

main();

export default main;
