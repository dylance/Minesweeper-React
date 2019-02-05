import React, { Component } from "react";

import Board from "./Board";
import grid from "../utils/fillBoard";

class App extends Component {
  state = {
    grid: []
  };

  clicked = (i, j) => {
    let grid = this.state.grid.slice();

    revealBlanks(grid,i,j)
    grid[i][j].display = "visible";
    this.setState({
      grid
    });
  };

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
        <Board grid={this.state.grid} clicked={this.clicked} />
      </div>
    );
  }
}

function revealBlanks(grid, i, j) {
  grid[i][j].checked = true;
  if (i > 0 && i < 9 && j > 0 && j < 9 && grid[i][j].value === '') {
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
        if( !grid[square[0]][square[1]].checked) {
          revealBlanks(grid, square[0], square[1])
        }
      }
    });
  }
}

export default App;
