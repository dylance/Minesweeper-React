import generateMine from './generateMine';

// Do not place a mine in a position where a mine already exists
// Returns new mine location or function is called until a mine
// is placed where there is not a mine
const checkDuplicate = mines => {
  let duplicate = false;
  let newMine = generateMine();

  mines.forEach(mine => {
    if (mine[0] === newMine[0] && mine[1] === newMine[1]) {
      duplicate = true;
    }
  });

  return duplicate ? checkDuplicate(mines) : newMine;
};

export default checkDuplicate;
