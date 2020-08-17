import React, { useState } from 'react';
import { connect } from 'react-redux';

import { createBoard } from '../actions/game';

const SelectSize = (props) => {
  const [boardConfig, setBoardConfig] = useState({
    width: '',
    height: '',
    bombs: '',
  });
  const [error, setErrorMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    const { width, height, bombs } = boardConfig;

    if (width > 50) {
      setErrorMessage('Width cannot be greater than 50')
      return;
    }
    if (height > 30) {
      setErrorMessage('Height cannot be greater than 30');
      return;
    }
    if (bombs / (height * width) > .35) {
      setErrorMessage('Bombs cannot be greater than 35% of the available cells');
      return;
    }

    props.createBoard(width, height, bombs);
    setErrorMessage('');
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
              {`${ item[0] }: `}
              <input
                type='text'
                placeholder=''
                name={item[0]}
                value={item[1]}
                onChange={onChange}
              />
            </label>
          );
        })}
        <input type='submit' value='Submit' />
      </form>
      <div className="form-error">{error}</div>
    </div>
  );
};

export default connect(null, { createBoard })(SelectSize);
