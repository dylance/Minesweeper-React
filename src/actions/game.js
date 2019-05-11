export const CHECK_BOMB = "CHECK_BOMB"

export function makeMove(game, board, i, j) {
  if(board[i][j].value === "B") {
    return {
      type: CHECK_BOMB,
      payload: {
        ...game,
        status: "dead fool"
      }
    };


  }
  return  {
    type: CHECK_BOMB,
    payload: game,
  }
}
