import React, { useEffect } from 'react';
import { FaBomb, FaFlagCheckered } from 'react-icons/fa';
import { connect } from 'react-redux';
import { setFlag, onClick } from '../actions/game';

const Square = (props) => {
  const { i, j, status, display, value } = props;

  useEffect(() => {
    console.log('was the use effect in the square called');
  }, [display]);
  console.log('was the square rendered');

  if (status === 'dead fool' && value === 'B') {
    return (
      <button className="square" style={{ background: 'red' }}>
        <FaBomb />
      </button>
    );
  }

  if (display === 'hidden') {
    return (
      <button
        onClick={() => {
          props.onClick(i, j, value);
        }}
        className="square"
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
        className="square"
        // right click
        onContextMenu={() => {
          props.setFlag(i, j);
        }}
      >
        <FaFlagCheckered />
      </button>
    );
  }

  return <button className="square">{value}</button>;
};

function mapStateToProps({ game }, props) {
  const { i, j } = props;
  return {
    value: game.board[i][j].value,
    display: game.board[i][j].display,
    status: game.status,
  };
}

function shouldRender(prevProps, nextProps) {
  // renders if false is returned
  const newGame =
    prevProps.status === 'dead fool' && nextProps.status === 'alive';
  console.log("NEw game is: ", newGame)
  const renderBomb =
    nextProps.status === 'dead fool' && nextProps.value === 'B';
  if (renderBomb) return false;
  const renderSquare = prevProps.display !== nextProps.display;
  if (renderSquare) return false;

  if (newGame) return false;
  return true;
}

export default connect(mapStateToProps, { onClick, setFlag })(
  React.memo(Square),
);

// @TODO fix shouldRender to work when making new board, (find way to test for breaking changes)
