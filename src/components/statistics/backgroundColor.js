import colors from './colors.js';
function setRandomBackground() {
  const randomIndex = randomIntegerFromInterval(0, colors.length);
  const color = colors[randomIndex];
  return color;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default setRandomBackground;
