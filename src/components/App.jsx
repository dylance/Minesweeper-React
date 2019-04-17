import React, { Component } from "react";

import Board from "./Board";
import PlayAgain from "./PlayAgain";
import createGrid from "../utils/createGrid";

class App extends Component {
  state = {
    grid: [],
    status: "alive",
    width: 20,
    height: 20,
    bombs: 5,
  };

  clicked = (i, j) => {
    let grid = this.state.grid.slice();

    if (grid[i][j].value === "B") {
      this.setState({ status: "dead" });
      return;
    }

    revealBlanks(grid, i, j, this.state.width, this.state.height);
    grid[i][j].display = "visible";
    this.setState({
      grid
    });
  };

  setFlag = (i,j) => {
    let grid = this.state.grid.slice();
    grid[i][j].display = grid[i][j].display === 'hidden' ? "flag" : 'hidden';
    this.setState({
      grid
    });


  }

  checkWin = grid => {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j].value !== "B" && grid[i][j].display === "hidden") {
          return;
        }
      }
    }

    this.setState({
      status: "won"
    });
  };

  componentDidUpdate() {
    if (this.state.status !== "won") {
      this.checkWin(this.state.grid);
    }
  }

  componentDidMount() {
    let newGrid = createGrid(this.state.width,this.state.height,this.state.bombs).map(row => {
      return row.map(square => {
        return { value: square, display: "hidden" };
      });
    });

    this.setState({ grid: newGrid });
  }

  render() {
    return (
      <div>
        <h1>{this.state.status}</h1>
        <Board
          grid={this.state.grid}
          clicked={this.clicked}
          status={this.state.status}
          setFlag={this.setFlag}
          height={this.state.height}
          width={this.state.width}
        />
        <PlayAgain aliveOrNot={this.state.status} />
      </div>
    );
  }
}

function revealBlanks(grid, i, j, width, height) {
  if (grid[i][j].value !== "") {
    return;
  }

  console.log("the width is: ", width);

  grid[i][j].checked = true;
  // general case
  if (i > 0 && i < height - 1 && j > 0 && j < width - 1 && grid[i][j].value === "") {
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

    perimeter.forEach(square => {
      if (grid[square[0]][square[1]].value === "") {
        grid[square[0]][square[1]].display = "visible";
        if (!grid[square[0]][square[1]].checked) {
          revealBlanks(grid, square[0], square[1], width, height);
        }
      }
    });
  }
  // left column
  if (j === 0 && i > 0 && i < 9) {
    const perimeter = [
      [i - 1, j],
      [i - 1, j + 1],
      [i, j + 1],
      [i + 1, j],
      [i + 1, j + 1]
    ];
    perimeter.forEach(square => {
      if (grid[square[0]][square[1]].value === "") {
        grid[square[0]][square[1]].display = "visible";
        if (!grid[square[0]][square[1]].checked) {
          revealBlanks(grid, square[0], square[1], width, height);
        }
      }
    });
  }
  // right column
  if (j === width - 1 && i > 0 && i < height - 1) {
    const perimeter = [
      [i - 1, j],
      [i - 1, j - 1],
      [i, j - 1],
      [i + 1, j],
      [i + 1, j - 1]
    ];
    perimeter.forEach(square => {
      if (grid[square[0]][square[1]].value === "") {
        grid[square[0]][square[1]].display = "visible";
        if (!grid[square[0]][square[1]].checked) {
          revealBlanks(grid, square[0], square[1], width, height);
        }
      }
    });
  }

  // top row
  if (i === 0 && j > 0 && j < width - 1) {
    const perimeter = [
      [i, j - 1],
      [i, j + 1],
      [i + 1, j - 1],
      [i + 1, j],
      [i + 1, j + 1]
    ];
    perimeter.forEach(square => {
      if (grid[square[0]][square[1]].value === "") {
        grid[square[0]][square[1]].display = "visible";
        if (!grid[square[0]][square[1]].checked) {
          revealBlanks(grid, square[0], square[1], width, height);
        }
      }
    });
  }

  // bottom row
  if (i === height - 1 && j > 0 && j < width - 1) {
    const perimeter = [
      [i, j - 1],
      [i, j + 1],
      [i - 1, j - 1],
      [i - 1, j],
      [i - 1, j + 1]
    ];
    perimeter.forEach(square => {
      if (grid[square[0]][square[1]].value === "") {
        grid[square[0]][square[1]].display = "visible";
        if (!grid[square[0]][square[1]].checked) {
          revealBlanks(grid, square[0], square[1], width, height);
        }
      }
    });
  }

  /// Corner Cases
  if (i === 0 && j === 0) {
    const perimeter = [[i, j + 1], [i + 1, j], [i + 1, j + 1]];
    checkNeighbors(perimeter, grid, width, height);
  }
  if (i === 0 && j === width - 1) {
    const perimeter = [[i, j - 1], [i + 1, j], [i + 1, j - 1]];
    checkNeighbors(perimeter, grid, width, height);
  }
  if (i === height - 1 && j === 0) {
    const perimeter = [[i, j + 1], [i - 1, j], [i - 1, j + 1]];
    checkNeighbors(perimeter, grid, width, height);
  }
  if (i === height - 1 && j === width - 1) {
    const perimeter = [[i, j - 1], [i - 1, j], [i - 1, j - 1]];
    checkNeighbors(perimeter, grid, width, height);
  }
}

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

export default App;
