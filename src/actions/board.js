export const CREATE_BOARD = "CREATE_BOARD"

export function makeMove(board) {
  return {
    type: CREATE_BOARD,
    board
  };
}
