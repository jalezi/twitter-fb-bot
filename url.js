const {
  CARD_SCREENS,
  MULTICARD_SCREENS,
  CHART_SCREENS,
  CUSTOM_CHART_SCREENS,
  CARD_EMBED_SCREENS,
} = require("./screensDict");

const AWS_URL =
  "https://325sfff4r2.execute-api.eu-central-1.amazonaws.com/sledilnikScreenshot";

const CARD_URL = `${AWS_URL}?type=card`;
const MULTICARD_URL = `${AWS_URL}?type=multicard`;
const CHART_URL = `${AWS_URL}?type=chart`;
const CARD_EMBED_URL = `${AWS_URL}?type=card_embed`;

exports.CARDS_URL = CARD_SCREENS.reduce((acc, screen) => {
  acc[screen] = `${CARD_URL}&screen=${screen}`;
  return acc;
}, {});

exports.MULTICARD_URL = MULTICARD_SCREENS.reduce((acc, screen) => {
  acc[screen] = `${MULTICARD_URL}&screen=${screen}`;
  return acc;
}, {});

exports.CHART_URL = CHART_SCREENS.reduce((acc, screen) => {
  acc[screen] = `${CHART_URL}&screen=${screen}`;
  return acc;
}, {});

exports.CUSTOM_CHARTS_URL = Object.entries(CUSTOM_CHART_SCREENS).reduce(
  (acc, [key, { screen, custom }]) => {
    acc[key] = `${CHART_URL}&screen=${screen}&custom=${custom}`;
    return acc;
  },
  {}
);

exports.CARDS_EMBED_URL = Object.entries(CARD_EMBED_SCREENS).reduce(
  (acc, [key, { screen }]) => {
    acc[key] = `${CARD_EMBED_URL}&screen=${screen}`;
    return acc;
  },
  {}
);
