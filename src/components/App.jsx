import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Board from './Board';
import SelectSize from './SelectSize';

const App = (props) => {
  const { status } = props;

  console.log('Was the app rendered');
  return (
    <div className='game-wrapper'>
      <SelectSize />
      <h1>{status}</h1>
      <Board />
    </div>
  );
};

function mapStateToProps({ game }) {
  return {
    status: game.status,
  };
}

export default connect(mapStateToProps)(App);
