import { generateMine } from './generateMine';

// Do not place a mine in a position where a mine already exists.
// Returns new mine location or recursive call is made until a mine
// is placed where there is not a mine.
export const checkDuplicate = (mines, height, width) => {
  let duplicate = false;
  const newMine = generateMine(height, width);

  mines.forEach((mine) => {
    if (mine[0] === newMine[0] && mine[1] === newMine[1]) {
      duplicate = true;
    }
  });

  return duplicate ? checkDuplicate(mines, height, width) : newMine;
};
