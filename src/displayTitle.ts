import showBanner from "node-banner";

// display currency converter title & tagline
const displayTitleAndTagline = async (): Promise<void> => {
  await showBanner(
    `  Currency Converter`,
    `                 CLI Currency Converter written in TypeScript / Node.js
                  ______________________________________________________`,
    "green",
    "gray"
  );
};

export default displayTitleAndTagline;
