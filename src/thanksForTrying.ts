import showBanner from "node-banner";

const thanksForTrying = async () => {
  await showBanner(` Thanks for trying!`);
};

export default thanksForTrying;
