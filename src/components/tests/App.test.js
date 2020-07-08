import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store';
import App from '../App';
import SelectSize from '../SelectSize';
import Board from '../Board';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={ store }>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Provider store={ store }>
      <App />
    </Provider>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('renders one SelectSize Component', () => {
  expect(wrapped.find(SelectSize).length).toEqual(1);
});

it('renders one h1', () => {
  expect(wrapped.find('h1').length).toEqual(1);
});

it('renders one Board component', () => {
  expect(wrapped.find(Board).length).toEqual(1);
});
