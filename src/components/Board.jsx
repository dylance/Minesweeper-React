import React from 'react';

import Square from './Square';

const Board = (props) => {
  const { grid, width, height } = props;

  const renderSquare = (value, i, j) => {
    return (
      <Square value={value} i={i} j={j} key={i.toString() + j.toString()} />
    );
  };

  const createBoard = () => {
    const board = [];
    for (let i = 0, count = 0; i < height; i++) {
      const squares = [];
      for (let j = 0; j < width; j++) {
        squares.push(renderSquare(grid[i][j], i, j));
        count++;
      }
      board.push(
        <div className="board-row" key={count}>
          {squares}
        </div>,
      );
    }
    return board;
  };

  if (grid.length === 0) {
    return <div>Select dimensions to start</div>;
  }
  return <div>{createBoard()}</div>;
};

export default Board;
