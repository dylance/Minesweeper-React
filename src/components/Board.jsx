import React from 'react';
import { connect } from 'react-redux';

import Square from './Square';

const Board = (props) => {
  const { width, height, status } = props;
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
  return (
    <div>
      <h1>{status}</h1>
      {createBoard()}
    </div>
  );
};

function mapStateToProps({ game }) {
  return {
    width: game.width,
    height: game.height,
    status: game.status,
  };
}

export default connect(mapStateToProps)(Board);
