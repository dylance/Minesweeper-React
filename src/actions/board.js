import revealBlanks from "../utils/revealBlanks";

export const CREATE_BOARD = "CREATE_BOARD";
export const SET_FLAG = "SET_FLAG";
export const ON_CLICK = "ON_CLICK";



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

export function onClick(board, i, j) {
  let grid = board.map(row => {
    return row.slice();
  });

  // if (grid[i][j].value === "B") {
  //   this.setState({ status: "dead" });
  //   return;
  // }

  revealBlanks(grid, i, j, 10, 10);

  grid[i][j].display = "visible";

  return {
    type: ON_CLICK,
    board: grid
  };
}
