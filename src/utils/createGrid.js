import checkDuplicate from './checkDuplicate';
import { getPerimeter } from '../constants';

const createGrid = (width, height, bombs) => {
  let grid = [];
  let mines = [];
  let row = Array(width).fill(null);

  // fill board
  for (let i = 0; i < height; i++) {
    grid.push(row.slice());
  }

  // create array of mine locations
  for (let i = 0; i < bombs; i++) {
    let newMine = checkDuplicate(mines, height, width);
    mines.push(newMine);
  }

  // Add mine position to the board
  mines.forEach(mine => {
    grid[mine[0]][mine[1]] = "B";
  });

  // Generate numbers around mines
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] === "B") {
        continue;
      }
      let minesNearby = 0;

      let perimeter = getPerimeter(i,j, width, height);

      perimeter = perimeter.map(cell => {
        return grid[cell[0]][cell[1]]
      })

      perimeter.forEach(cell => {
        if (cell === "B") {
          minesNearby += 1;
        }
      });

      grid[i][j] = minesNearby ? minesNearby.toString() : "";
    }
  }

   grid = grid.map(row => {
    return row.map(square => {
      return { value: square, display: "hidden" };
    });
  });

  return grid;
}

export default createGrid;
