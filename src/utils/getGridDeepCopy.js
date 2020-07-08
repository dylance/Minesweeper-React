export const getGridDeepCopy = (board) => {
  return board.map((row) => {
    return row.map((cell) => {
      return { ...cell };
    });
  });
};
