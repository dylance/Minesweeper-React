import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import store from './store';

import App from "./components/App";
import reducer from "./reducers";
import './index.css';
console.log("the reducer is: ", reducer)

//const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
