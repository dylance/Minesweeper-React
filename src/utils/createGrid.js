import checkDuplicate from './checkDuplicate';

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
    let newMine = checkDuplicate(mines);
    mines.push(newMine);
  }

  // Add mine position to the board
  mines.forEach(mine => {
    grid[mine[0]][mine[1]] = "B";
  });

  // Generate numbers around mines
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (grid[i][j] === "B") {
        continue;
      }
      let minesNearby = 0;

      //grid[i][j] = 0;
      let perimeter = null;
      // top left corner case
      if (i === 0 && j === 0) {
        perimeter = [grid[i][j + 1], grid[i + 1][j], grid[i + 1][j + 1]];
        //    console.log("aThe perimter is: ", perimeter)
      }
      // top right corner
      if (i === 0 && j === 9) {
        perimeter = [grid[i][j - 1], grid[i + 1][j], grid[i + 1][j - 1]];
        //console.log("bThe perimter is: ", perimeter)
      }
      // bottom left corner
      if (i === 9 && j === 0) {
        perimeter = [grid[i - 1][j], grid[i - 1][j + 1], grid[1][j + 1]];
        //    console.log("cThe perimter is: ", perimeter)
      }
      // bottom right corner
      if (i === 9 && j === 9) {
        perimeter = [grid[i][j - 1], grid[i - 1][j - 1], grid[i - 1][j]];
        //console.log("dThe perimter is: ", perimeter)
      }

      // first column
      if (j === 0 && !perimeter) {
        perimeter = grid.slice(i - 1, i + 2);
        perimeter = perimeter.map(row => {
          return row.slice(0, 2);
        });
        perimeter = [].concat.apply([], perimeter);
      }
      // last column
      if (j === 9 && !perimeter) {
        perimeter = grid.slice(i - 1, i + 2);
        perimeter = perimeter.map(row => {
          return row.slice(8, 10);
        });
        perimeter = [].concat.apply([], perimeter);
      }

      // top row
      if (i === 0 && !perimeter) {
        perimeter = grid.slice(0, 2);
        perimeter = perimeter.map(row => {
          return row.slice(j - 1, j + 2);
        });
        perimeter = [].concat.apply([], perimeter);
      }
      // bottom row
      if (i === 9 && !perimeter) {
        perimeter = grid.slice(8, 10);
        perimeter = perimeter.map(row => {
          return row.slice(j - 1, j + 2);
        });
        perimeter = [].concat.apply([], perimeter);
      }

      // General Case
      if (!perimeter) {
        perimeter = grid.slice(i - 1, i + 2);
        perimeter = perimeter.map(row => {
          return row.slice(j - 1, j + 2);
        });

        perimeter = [].concat.apply([], perimeter);
      }

      perimeter.forEach(cell => {
        if (cell === "B") {
          minesNearby += 1;
        }
      });

      grid[i][j] = minesNearby ? minesNearby.toString() : "";
    }
  }

  return grid;
}

export default createGrid;
