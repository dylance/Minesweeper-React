export const CREATE_BOARD = "CREATE_BOARD";
export const SET_FLAG = "SET_FLAG";

export function makeMove(board) {
  return {
    type: CREATE_BOARD,
    board
  };
}

export function setFlag(board, i, j) {
  console.log("the action creator was clicked")
  console.log("The board is:  ", board)
  let board2 = board.slice();
  console.log("Board2 is:  ", board2)
  board2[i][j].display = board2[i][j].display === 'hidden' ? "flag" : 'hidden';

  return {
    type: SET_FLAG,
    board: board2
  };
}
