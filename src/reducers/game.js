import { CREATE_BOARD, SET_FLAG, ON_CLICK } from '../actions/game';
import { revealBlanks, createGrid, getGridDeepCopy, checkWin } from '../utils';

export default function game(
  state = {
    status: 'alive',
    width: 0,
    height: 0,
    bombs: 0,
    board: [],
  },
  action,
) {
  switch (action.type) {
    case CREATE_BOARD:
      return action.data;
    case SET_FLAG: {
      const { i, j } = action.data;
      const grid = getGridDeepCopy(state.board);

      grid[i][j].display = grid[i][j].display === 'hidden' ? 'flag' : 'hidden';
      return {
        ...state,
        board: grid,
      };
    }
    case ON_CLICK: {
      const { i, j, value } = action.data;
      const { height, width } = state;
      let newStatus = state.status;
      const grid = getGridDeepCopy(state.board);

      revealBlanks(grid, i, j, width, height);

      grid[i][j].display = 'visible';

      if (value === 'B') {
        newStatus = 'dead fool';
      } else {
        newStatus = checkWin(grid) ? 'won' : newStatus
      }

      return {
        ...state,
        board: grid,
        status: newStatus,
      };
    }
    default:
      return state;
  }
}

// use block scope to redefine vars
// https://stackoverflow.com/questions/44433968/redux-define-new-state-in-reducer-switch-statement-with-new-variable-each-time
