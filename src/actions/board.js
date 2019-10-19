import revealBlanks from '../utils/revealBlanks'
import createGrid from '../utils/createGrid'

export const CREATE_BOARD = 'CREATE_BOARD'
export const SET_FLAG = 'SET_FLAG'
export const ON_CLICK = 'ON_CLICK'

export function createBoard(height, width, bombs) {
  console.log('The height is: ', height)
  console.log('The width is: ', width)
  console.log('The bombs is: ', bombs)
  const board = createGrid(height, width, bombs)

  return {
    type: CREATE_BOARD,
    board,
  }
}

export function setFlag(board, i, j) {
  console.log('the action creator was clicked')
  console.log('The board is:  ', board)
  const board2 = board.slice()
  console.log('Board2 is:  ', board2)
  board2[i][j].display = board2[i][j].display === 'hidden' ? 'flag' : 'hidden'

  return {
    type: SET_FLAG,
    board: board2,
  }
}

export function onClick(board, i, j, height, width) {
  const grid = board.map((row) => {
    return row.slice()
  })
  console.log('the grid is:  ', grid)

  // if (grid[i][j].value === "B") {
  //   this.setState({ status: "dead" });
  //   return;
  // }

  revealBlanks(grid, i, j, height, width)

  grid[i][j].display = 'visible'

  return {
    type: ON_CLICK,
    board: grid,
  }
}
