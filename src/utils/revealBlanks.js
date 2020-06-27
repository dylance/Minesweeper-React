import checkNeighbors from "./checkNeighbors";

function revealBlanks(grid, i, j, width, height) {
  if (grid[i][j].value !== "") {
    return;
  }

  grid[i][j].checked = true;
  // general case
  if (grid[i][j].value === "") {
    let perimeter = [
      [i - 1, j - 1],
      [i - 1, j],
      [i - 1, j + 1],
      [i, j - 1],
      [i, j + 1],
      [i + 1, j - 1],
      [i + 1, j],
      [i + 1, j + 1]
    ];

    perimeter = perimeter.filter(per => {
      return per[0] >= 0 && per[0] < width && per[1] >= 0 && per[1] < height;
    });

    perimeter.length === 3
      ? checkNeighbors(perimeter, grid, width, height)
      : perimeter.forEach(square => {
          if (
            grid[square[0]][square[1]] &&
            grid[square[0]][square[1]].value === ""
          ) {
            grid[square[0]][square[1]].display = "visible";
            if (!grid[square[0]][square[1]].checked) {
              revealBlanks(grid, square[0], square[1], width, height);
            }
          }
        });
  }
}

export default revealBlanks;
