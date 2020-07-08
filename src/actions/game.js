export const CHECK_BOMB = 'CHECK_BOMB';
export const CHECK_WIN = 'CHECK_WIN';
export const RESET_STATUS = 'RESET_STATUS';

export function makeMove(game, board, i, j) {
  if (board[i][j].value === 'B') {
    return {
      type: CHECK_BOMB,
      payload: {
        ...game,
        status: 'dead fool',
      },
    };
  }
  return {
    type: CHECK_BOMB,
    payload: game,
  };
}

export function checkWin(game, board) {
  // if (board.length === 0) {
  //   return;
  // }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j].value !== 'B' && board[i][j].display === 'hidden') {
        return {
          type: CHECK_WIN,
          payload: game,
        };
      }
    }
  }
  return {
    type: CHECK_WIN,
    payload: {
      ...game,
      status: 'won',
    },
  };
}

export function resetStatus(width, height, bombs) {
  return {
    type: RESET_STATUS,
    payload: {
      status: 'alive',
      width,
      height,
      bombs,
    },
  };
}
