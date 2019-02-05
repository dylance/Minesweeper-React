import React, { Component } from "react";

import Square from "./Square";

class Board extends Component {
  renderSquare(value, i, j) {
    //x = x.toString();
    //y = y.toString();
    //let key = x+y
    return (
      <Square
        value={value}
        key={Math.random()}
        clicked={() => this.props.clicked(i, j)}
      />
    );
  }

  createBoard = () => {
    let board = [];
    for (let i = 0, count = 0; i < 10; i++) {
      let squares = [];
      for (let j = 0; j < 10; j++) {
        squares.push(this.renderSquare(this.props.grid[i][j], i, j));
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
      return <div>Loading</div>;
    }
    return <div>{this.createBoard()}</div>;
  }
}

export default Board;
