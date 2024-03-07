import showBanner from "node-banner";

// display currency converter title & tagline
const displayTitleAndTagline = async () => {
  await showBanner(
    `  Currency Converter`,
    `                 CLI Currency Converter written in TypeScript / Node.js
                         _______________________________________________________`,
    "green",
    "gray"
  );
};

export default displayTitleAndTagline;
