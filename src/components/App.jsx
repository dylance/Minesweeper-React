import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Board from './Board';
import SelectSize from './SelectSize';
import { checkWin } from '../actions/game';

const App = (props) => {
  const { game, board, dispatch } = props;
  useEffect(() => {
    if (game.status !== 'won') {
      dispatch(checkWin(game, board));
    }
  });

  return (
    <div className="game-wrapper">
      <SelectSize />
      <h1>{game.status}</h1>
      <Board grid={board} height={game.height} width={game.width} />
    </div>
  );
};

function mapStateToProps({ board, game }) {
  return {
    board,
    game,
  };
}

export default connect(mapStateToProps)(App);
