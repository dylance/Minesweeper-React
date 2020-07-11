import React from 'react';
import { connect } from 'react-redux';

import Square from './Square';

const Board = (props) => {
  const { game } = props;
  const { width, height } = game;
  console.log('Is the board rendering');

  const createBoard = () => {
    const board2 = [];
    for (let i = 0; i < height; i++) {
      const rows = [];
      for (let j = 0; j < width; j++) {
        rows.push(<Square i={i} j={j} key={i.toString() + j.toString()} />);
      }
      board2.push(
        <div className='board-row' key={i}>
          {rows}
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

function mapStateToProps({ game }) {
  return {
    game,
  };
}

export default connect(mapStateToProps)(Board);
