import React, { Component } from "react";

import Square from "./Square";

class Board extends Component {



  shouldComponentUpdate(nextProps, nextState) {
    console.log("Was I checked!!!")
    let value = this.props.grid != nextProps.grid;
    console.log("The value is: ", value)
    return value
  }
  renderSquare(value, i, j) {
    return <Square value={value} i={i} j={j} key={Math.random()} />;
  }

  createBoard = () => {
    const { grid, height, width } = this.props;
    const board = [];
    for (let i = 0, count = 0; i < height; i++) {
      const squares = [];
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
    console.log("board has been rendered")
    if (this.props.grid.length === 0) {
      return <div>Select dimensions to start</div>;
    }
    return <div>{this.createBoard()}</div>;
  }
}

export default Board;
