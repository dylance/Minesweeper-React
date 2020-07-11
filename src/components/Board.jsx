import React from 'react';
import { connect } from 'react-redux'

import Square from './Square';

const Board = (props) => {
  const {  board, game } = props;
  const { width, height } = game

  const renderSquare = (value, i, j) => {
    return (
      <Square value={ value } i={ i } j={ j } key={ i.toString() + j.toString() } />
    );
  };

  const createBoard = () => {
    const board2 = [];
    for (let i = 0, count = 0; i < height; i++) {
      const squares = [];
      for (let j = 0; j < width; j++) {
        squares.push(renderSquare(board[i][j], i, j));
        // count is just for the key
        count++;
      }
      board2.push(
        <div className='board-row' key={ count }>
          {squares}
        </div>
      );
    }
    return board2;
  };

  if (width === 0) {
    return <div>Select dimensions to start</div>;
  }
  return <div>{createBoard()}</div>;
};

function mapStateToProps({ board, game }) {
  return {
    board,
    game,
  };
}

export default connect(mapStateToProps)(Board);
