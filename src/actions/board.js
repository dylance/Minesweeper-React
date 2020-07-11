import { createGrid } from '../utils';

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

export function setFlag(i, j) {
  return {
    type: SET_FLAG,
    data: {
      i,
      j,
    },
  };
}

export function onClick(i, j, height, width) {
  return {
    type: ON_CLICK,
    data: {
      i,
      j,
      height,
      width,
    },
  };
}
