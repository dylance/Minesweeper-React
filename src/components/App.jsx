import React, { Component } from "react";

import Board from './Board'
import grid  from '../utils/fillBoard'

class App extends Component {
  state = {
    grid: []
  };

  clicked = (i,j) => {
    let grid = this.state.grid.slice()
    grid[i][j].display = 'visible'
    console.log("I is:", i)
    this.setState({
      grid
    })
  }

  componentDidMount() {
  let  newGrid = grid.map(row => {
      return row.map(square => {
        return {value: square, display: 'hidden'}
      })
    })

    this.setState({grid: newGrid})
  }

  render() {
    console.log("The grid is: ", this.state.grid)
    return (
      <div>
        <Board grid={this.state.grid} clicked={this.clicked}/>
      </div>
    )
  }
}

export default App;
