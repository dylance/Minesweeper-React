import React, { Component } from "react";

import Square from "./Square";

class Board extends Component {
  renderSquare(value, i, j) {
    return (
      <Square
        value={value}
        i={i}
        j={j}
        key={Math.random()}
      />
    );
  }

  createBoard = () => {
    let { grid, height, width } = this.props;
    let board = [];
    for (let i = 0, count = 0; i < height; i++) {
      let squares = [];
      for (let j = 0; j < width; j++) {
        squares.push(this.renderSquare(grid[i][j], i, j));
        count++;
      }
      board.push(
        <div className="board-row" key={count}>
          {squares}
        </div>
      );
    }
    return board;
  };

  render() {
    if (this.props.grid.length === 0) {
      return <div>Select dimensions to start</div>;
    }
    return <div>{this.createBoard()}</div>;
  }
}

export default Board;
