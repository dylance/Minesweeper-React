import React, { useEffect } from 'react';
import { FaBomb, FaFlagCheckered } from 'react-icons/fa';
import { connect } from 'react-redux';
import { setFlag, onClick } from '../actions/board';
import { makeMove } from '../actions/game';

const Square = (props) => {
  const {
    game, i, j, display, value,
  } = props;

  useEffect(() => {
    console.log('was the use effect in the square called');
  }, [display]);
  console.log('was the square rendered');

  if (game.status === 'dead fool' && value === 'B') {
    return (
      <button className='square' style={{ background: 'red' }}>
        <FaBomb />
      </button>
    );
  }

  if (display === 'hidden') {
    return (
      <button
        onClick={() => {
          props.makeMove(game, value);
          props.onClick(i, j, game.width, game.height);
        }}
        className='square'
        style={{ background: '#666' }}
        onContextMenu={() => {
          props.setFlag(i, j);
        }}
      />
    );
  }

  if (display === 'flag') {
    return (
      <button
        className='square'
        // right click
        onContextMenu={() => {
          props.setFlag(i, j);
        }}
      >
        <FaFlagCheckered />
      </button>
    );
  }

  return <button className='square'>{value}</button>;
};

function mapStateToProps({ board, game }, props) {
  const { i, j } = props;
  return {
    value: board[i][j].value,
    display: board[i][j].display,
    game,
  };
}

export default connect(mapStateToProps, { makeMove, onClick, setFlag })(Square);
