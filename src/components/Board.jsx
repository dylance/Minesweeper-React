import React, { Component } from "react";

import Square from "./Square";

class Board extends Component {
  renderSquare(value, i, j) {
    return (
      <Square
        value={value}
        key={Math.random()}
        clicked={() => this.props.clicked(i, j)}
        status={this.props.status}
        setFlag={() => this.props.setFlag(i,j)}
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
      return <div>Create a Board</div>;
    }
    return <div>{this.createBoard()}</div>;
  }
}

export default Board;
