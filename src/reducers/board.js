import { CREATE_BOARD, SET_FLAG, ON_CLICK } from '../actions/board';
import { revealBlanks, createGrid, getGridDeepCopy } from '../utils';

export default function board(state = [], action) {
  switch (action.type) {
    case CREATE_BOARD:
      return action.board;
    case SET_FLAG: {
      const { i, j } = action.data;
      const grid = getGridDeepCopy(state);

      grid[i][j].display = grid[i][j].display === 'hidden' ? 'flag' : 'hidden';
      return grid;
    }
    case ON_CLICK: {
      const {
        i, j, width, height,
      } = action.data;
      const grid = getGridDeepCopy(state);

      revealBlanks(grid, i, j, height, width);

      grid[i][j].display = 'visible';

      return grid;
    }
    default:
      return state;
  }
}
// use block scope to redefine vars
// https://stackoverflow.com/questions/44433968/redux-define-new-state-in-reducer-switch-statement-with-new-variable-each-time
