const getGridDeepCopy = (board) => {
  return board.map((row) => {
    return row.map(cell => {
      return {...cell}
    })
  })
}

export default getGridDeepCopy;
