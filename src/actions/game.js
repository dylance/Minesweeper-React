import { createGrid } from '../utils';

export const CREATE_BOARD = 'CREATE_BOARD';
export const SET_FLAG = 'SET_FLAG';
export const ON_CLICK = 'ON_CLICK';

export function createBoard(width, height, bombs) {
  const board = createGrid(width, height, bombs);

  return {
    type: CREATE_BOARD,
    data: {
      status: 'alive',
      width,
      height,
      bombs,
      board,
    },
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

export function onClick(i, j, value) {
  return {
    type: ON_CLICK,
    data: {
      i,
      j,
      value
    },
  };
}
