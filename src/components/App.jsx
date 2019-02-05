import React, { Component } from "react";

import Board from './Board'
import grid from '../utils/fillBoard'

class App extends Component {
  state = {
    grid: []
  };

  componentDidMount() {

    this.setState({grid})
  }
  render() {
    console.log("The grid is: ", this.state.grid)
    return (
      <div>
        <Board grid={this.state.grid} />
      </div>
    )
  }
}

export default App;
