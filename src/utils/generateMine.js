import randomNum from './randomNum';

// Generates mines position on the board
const generateMine = () => {
  return [randomNum(), randomNum()];
};

export default generateMine;
