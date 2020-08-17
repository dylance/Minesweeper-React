export function checkWin(board) {
  let win = true;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j].value !== 'B' && board[i][j].display === 'hidden') {
        win = false;
      }
    }
  }
  return win;
}
