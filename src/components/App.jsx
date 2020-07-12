import React from 'react';

import Board from './Board';
import SelectSize from './SelectSize';

const App = () => {
  return (
    <div className='game-wrapper'>
      <SelectSize />
      <Board />
    </div>
  );
};

export default App;
