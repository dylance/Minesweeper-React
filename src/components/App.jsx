import React, { Component } from "react";

import Board from './Board'

class App extends Component {
  state = {
    grid: []
  };

  componentDidMount() {
    const randomNum = () => {
      return Math.floor(Math.random() * 10);
    };

    const generateMine = () => {
      return [randomNum(), randomNum()];
    };

    const checkDuplicate = mines => {
      let duplicate = false;
      let newMine = generateMine();

      mines.forEach(mine => {
        if (mine[0] === newMine[0] && mine[1] === newMine[1]) {
          duplicate = true;
        }
      });

      return duplicate ? checkDuplicate(mines) : newMine;
    };

    let row = Array(10).fill(null);

    let grid = [];

    for (let i = 0; i < 10; i++) {
      grid.push(row.slice());
    }

    let mines = [];

    for (let i = 0; i < 15; i++) {
      let newMine = checkDuplicate(mines);
      mines.push(newMine);
    }

    mines.forEach(mine => {
      grid[mine[0]][mine[1]] = "B";
    });

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
          console.log("The special perimeter is:", perimeter);
        }
        // last column
        if (j === 9 && !perimeter) {
          perimeter = grid.slice(i - 1, i + 2);
          perimeter = perimeter.map(row => {
            return row.slice(8, 10);
          });
          perimeter = [].concat.apply([], perimeter);
          console.log("The special perimeter is:", perimeter);
        }

        // top row
        if (i === 0 && !perimeter) {
          perimeter = grid.slice(0, 2);
          perimeter = perimeter.map(row => {
            return row.slice(j - 1, j + 2);
          });
          perimeter = [].concat.apply([], perimeter);
          console.log("The special perimeter is:", perimeter);
        }
        // bottom row
        if (i === 9 && !perimeter) {
          perimeter = grid.slice(8, 10);
          perimeter = perimeter.map(row => {
            return row.slice(j - 1, j + 2);
          });
          perimeter = [].concat.apply([], perimeter);
          console.log("The special perimeter is:", perimeter);
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

        grid[i][j] = minesNearby ? minesNearby.toString() : '';
      }
    }
    this.setState({grid})
  }
  render() {
    console.log("The grid is: ", this.state.grid)
    return (
      <div>
        <Board grid={this.state.grid} />
      </div>
    )
  }
}

export default App;
