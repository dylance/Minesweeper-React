import React, { useState } from 'react';
import { connect } from 'react-redux';

import { createBoard } from '../actions/game';

const SelectSize = (props) => {
  const [boardConfig, setBoardConfig] = useState({
    width: '',
    height: '',
    bombs: '',
  });

  const handleSubmit = (event) => {
    const { width, height, bombs } = boardConfig;
    event.preventDefault();
    props.createBoard(width, height, bombs);
  };

  const onChange = (e) => {
    setBoardConfig({ ...boardConfig, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {Object.entries(boardConfig).map((item) => {
          return (
            <label key={item[0]}>
              {`${item[0]}: `}
              <input
                type="text"
                placeholder=""
                name={item[0]}
                value={item[1]}
                onChange={onChange}
              />
            </label>
          );
        })}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default connect(null, { createBoard })(SelectSize);
