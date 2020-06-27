import randomNum from './randomNum'

// Generates mines position on the board
const generateMine = (height, width) => {
  return [randomNum(height), randomNum(width)]
}

export default generateMine
