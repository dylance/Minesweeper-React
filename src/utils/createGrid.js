import { checkDuplicate } from './checkDuplicate';
import { getPerimeter } from '../constants';

export const createGrid = (width, height, bombs) => {
  let grid = new Array(parseInt(height, 10)).fill(null);
  const mines = [];
  const row = new Array(parseInt(width, 10)).fill({
    value: '',
    display: 'hidden',
  });

  grid = grid.map(() => {
    return row.map((cell) => ({ ...cell }));
  });

  // create array of mine locations
  for (let i = 0; i < bombs; i++) {
    const newMine = checkDuplicate(mines, height, width);
    mines.push(newMine);
  }

  // Add mine position to the board
  mines.forEach((mine) => {
    grid[mine[0]][mine[1]].value = 'B';
  });

  // Generate numbers around mines
  grid.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell.value === 'B') {
        return;
      }
      let minesNearby = 0;

      let perimeter = getPerimeter(i, j, width, height);

      perimeter = perimeter.map((cell) => {
        return grid[cell[0]][cell[1]];
      });

      perimeter.forEach((cell) => {
        if (cell.value === 'B') {
          minesNearby += 1;
        }
      });

      cell.value = minesNearby ? minesNearby.toString() : '';
    });
  });

  return grid;
};
