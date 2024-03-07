import showBanner from "node-banner";

const thanks = async (): Promise<void> => {
  await showBanner(
    ` Thanks for trying!`,
    `   __________________________________________________________________________________`,
    "green",
    "gray"
  );
};

export default thanks;
