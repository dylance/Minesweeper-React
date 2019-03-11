import React, { Component } from "react";

import Board from "./Board";
import PlayAgain from "./PlayAgain";
import grid from "../utils/fillBoard";

class App extends Component {
  state = {
    grid: [],
    status: "alive"
  };

  clicked = (i, j) => {
    let grid = this.state.grid.slice();

    if (grid[i][j].value === "B") {
      this.setState({ status: "dead" });
      return;
    }

    revealBlanks(grid, i, j);
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

  startAgain = () => {
    return <div>Hello</div>
  }

  componentDidUpdate() {
    if (this.state.status !== "won") {
      this.checkWin(this.state.grid);
    }
  }
  componentDidMount() {
    let newGrid = grid.map(row => {
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
        />
      <PlayAgain aliveOrNot={this.state.status} />
      </div>
    );
  }
}

function revealBlanks(grid, i, j) {
  if (grid[i][j].value !== "") {
    return;
  }
  grid[i][j].checked = true;
  // general case
  if (i > 0 && i < 9 && j > 0 && j < 9 && grid[i][j].value === "") {
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
          revealBlanks(grid, square[0], square[1]);
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
          revealBlanks(grid, square[0], square[1]);
        }
      }
    });
  }
  // right column
  if (j === 9 && i > 0 && i < 9) {
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
          revealBlanks(grid, square[0], square[1]);
        }
      }
    });
  }

  // top row
  if (i === 0 && j > 0 && j < 9) {
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
          revealBlanks(grid, square[0], square[1]);
        }
      }
    });
  }

  // bottom row
  if (i === 9 && j > 0 && j < 9) {
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
          revealBlanks(grid, square[0], square[1]);
        }
      }
    });
  }

  /// Corner Cases
  if (i === 0 && j === 0) {
    const perimeter = [[i, j + 1], [i + 1, j], [i + 1, j + 1]];
    checkNeighbors(perimeter, grid);
  }
  if (i === 0 && j === 9) {
    const perimeter = [[i, j - 1], [i + 1, j], [i + 1, j - 1]];
    checkNeighbors(perimeter, grid);
  }
  if (i === 9 && j === 0) {
    const perimeter = [[i, j + 1], [i - 1, j], [i - 1, j + 1]];
    checkNeighbors(perimeter, grid);
  }
  if (i === 9 && j === 9) {
    const perimeter = [[i, j - 1], [i - 1, j], [i - 1, j - 1]];
    checkNeighbors(perimeter, grid);
  }
}

function checkNeighbors(perimeter, grid) {
  perimeter.forEach(square => {
    if (grid[square[0]][square[1]].value === "") {
      grid[square[0]][square[1]].display = "visible";
      if (!grid[square[0]][square[1]].checked) {
        revealBlanks(grid, square[0], square[1]);
      }
    }
  });
}

export default App;
