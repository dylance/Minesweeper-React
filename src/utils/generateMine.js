import { randomNum } from './randomNum';

// Generates mines position on the board
export const generateMine = (height, width) => {
  return [randomNum(height), randomNum(width)];
};
