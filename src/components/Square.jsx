import React from 'react';
import { FaBomb, FaFlagCheckered } from 'react-icons/fa';
import { connect } from 'react-redux';
import { setFlag, onClick } from '../actions/board';
import { makeMove } from '../actions/game';

const Square = (props) => {
  const {
    game, board, i, j, value,
  } = props;

  if (game.status === 'dead fool' && board[i][j].value === 'B') {
    return (
      <button className='square' style={ { background: 'red' } }>
        <FaBomb />
      </button>
    );
  }

  if (value.display === 'hidden') {
    return (
      <button
        onClick={ (e) => {
          e.preventDefault();
          props.makeMove(game, board, i, j);
          props.onClick(board, i, j, game.width, game.height);
        } }
        className='square'
        style={ { background: '#666' } }
        // right click
        onContextMenu={ (e) => {
          e.preventDefault();
          props.setFlag(board, i, j);
        } }
      />
    );
  }

  if (value.display === 'flag') {
    return (
      <button
        className='square'
        onContextMenu={ (e) => {
          e.preventDefault();
          props.setFlag(board, props.i, props.j);
        } }
      >
        <FaFlagCheckered />
      </button>
    );
  }

  return <button className='square'>{value.value}</button>;
};

function mapStateToProps({ board, game }) {
  return {
    board,
    game,
  };
}

export default connect(mapStateToProps, { makeMove, onClick, setFlag })(Square);
