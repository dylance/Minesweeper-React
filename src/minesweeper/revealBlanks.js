import { checkNeighbors } from './checkNeighbors';
import { getPerimeter } from '../constants';

export function revealBlanks(grid, i, j, width, height) {
  if (grid[i][j].value !== '') {
    return;
  }

  const perimeter = getPerimeter(i, j, width, height);
  grid[i][j].checked = true;

  perimeter.forEach((square) => {
    if (grid[square[0]][square[1]] && grid[square[0]][square[1]].value === '') {
      grid[square[0]][square[1]].display = 'visible';
      if (!grid[square[0]][square[1]].checked) {
        revealBlanks(grid, square[0], square[1], width, height);
      }
    }
  });
}
