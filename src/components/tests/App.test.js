import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store';
import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App></App>
      </Provider>,
      div
    );
  ReactDOM.unmountComponentAtNode(div);
})
