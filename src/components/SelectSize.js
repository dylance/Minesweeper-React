import React, { useState } from 'react';
import { connect } from 'react-redux';

import { createBoard } from '../actions/board';
import { resetStatus } from '../actions/game';

const SelectSize = (props) => {
  const [boardConfig, setBoardConfig] = useState({
    width: '',
    height: '',
    bombs: '',
  });

  const handleSubmit = (event) => {
    const { width, height, bombs } = boardConfig;
    event.preventDefault();
    console.log('Submit has been handled');
    props.createBoard(height, width, bombs);
    props.resetStatus(height, width, bombs);
  };

  const onChange = (e) => {
    setBoardConfig({ ...boardConfig, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Width:
          <input
            type="text"
            placeholder=""
            name="width"
            value={boardConfig.width}
            onChange={onChange}
          />
        </label>
        <label>
          Height:
          <input
            type="text"
            name="height"
            value={boardConfig.height}
            onChange={onChange}
          />
        </label>
        <label>
          Bombs:
          <input
            type="text"
            name="bombs"
            value={boardConfig.bombs}
            onChange={onChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

function mapStateToProps({ board, game }) {
  return {
    board,
    game,
  };
}

export default connect(mapStateToProps, { createBoard, resetStatus })(
  SelectSize,
);
