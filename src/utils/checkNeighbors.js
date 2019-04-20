import revealBlanks from "./revealBlanks";

function checkNeighbors(perimeter, grid, width, height) {
  perimeter.forEach(square => {
    if (grid[square[0]][square[1]].value === "") {
      grid[square[0]][square[1]].display = "visible";
      if (!grid[square[0]][square[1]].checked) {
        revealBlanks(grid, square[0], square[1], width, height);
      }
    }
  });
}

export default checkNeighbors;
