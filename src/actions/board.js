import { revealBlanks, createGrid, getGridDeepCopy } from '../utils';

export const CREATE_BOARD = 'CREATE_BOARD';
export const SET_FLAG = 'SET_FLAG';
export const ON_CLICK = 'ON_CLICK';

export function createBoard(height, width, bombs) {
  const board = createGrid(height, width, bombs);

  return {
    type: CREATE_BOARD,
    board,
  };
}

export function setFlag(board, i, j) {
  const grid = getGridDeepCopy(board);

  grid[i][j].display = grid[i][j].display === 'hidden' ? 'flag' : 'hidden';

  return {
    type: SET_FLAG,
    board: grid,
  };
}

export function onClick(board, i, j, height, width) {
  const grid = getGridDeepCopy(board);

  revealBlanks(grid, i, j, height, width);

  grid[i][j].display = 'visible';

  return {
    type: ON_CLICK,
    board: grid,
  };
}
