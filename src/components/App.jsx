import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Board from './Board';
import SelectSize from './SelectSize';
import { checkWin } from '../actions/game';

const App = (props) => {
  const { game, dispatch } = props;
  useEffect(() => {
    console.log("Was the effect called in App")
    if (game.status !== 'won') {
      //dispatch(checkWin(game, board));
    }
  },[game.status]);
  console.log("Was the app rendered")
  return (
    <div className='game-wrapper'>
      <SelectSize />
      <h1>{game.status}</h1>
      <Board />
    </div>
  );
};

function mapStateToProps({ game }) {
  return {
    game,
  };
}

export default connect(mapStateToProps)(App);
