import React, { Component } from "react";

import Board from "./Board";
import PlayAgain from "./PlayAgain";
import SelectSize from "./SelectSize";
import createGrid from "../utils/createGrid";
import revealBlanks from "../utils/revealBlanks";

class App extends Component {
  state = {
    grid: [],
    status: "alive",
    width: 15,
    height: 15,
    bombs: 5,
    tempwidth: 0,
    tempheight: 0,
    tempbombs: 0,
    minutes: 0,
    seconds: 0,
    zeroPlace: 0,
    timerOn: null,
  };

  clicked = (i, j) => {
    let grid = this.state.grid.map(row => {
      return row.slice();
    });

    if (grid[i][j].value === "B") {
      this.setState({ status: "dead" });
      return;
    }

    revealBlanks(grid, i, j, this.state.width, this.state.height);

    grid[i][j].display = "visible";
    this.setState({
      grid
    });

    if (!this.state.timerOn) {
      console.log("the timer is not on")
      this.timer = setInterval(() => {
        // reset seconds every minute and add one minute
        if (this.state.seconds != 0 && this.state.seconds % 59 === 0) {
          this.setState({ minutes: this.state.minutes+1, seconds: -1 })
        }
        // remove zero place after 9 seconds
        if (this.state.seconds >= 9) {
          this.setState({ zeroPlace: '' })
        }
        // add zero place if seconds are less than 10
        if (this.state.seconds < 9) {
          this.setState({ zeroPlace: 0 })
        }
        // add one second every second,
        // and turn timerOn to true so interval will not run every time someone clicks.
        this.setState({
        seconds: this.state.seconds+1,
        timerOn: true
      })}, 1000)
    }
  };

  setFlag = (i,j) => {
    let grid = this.state.grid.slice();
    grid[i][j].display = grid[i][j].display === 'hidden' ? "flag" : 'hidden';
    this.setState({
      grid
    });
  }

  checkWin = grid => {
    if (grid.length === 0) {
      return;
    }
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j].value !== "B" && grid[i][j].display === "hidden") {
          return;
        }
      }
    }

    clearInterval(this.timer);
    this.setState({
      status: "won",
      timerOn: null,
    });
  };

  onChange = (e) => {
    this.setState({["temp" + e.target.name]: e.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();

    let newGrid = createGrid(this.state.tempwidth, this.state.tempheight, this.state.tempbombs).map(row => {
      return row.map(square => {
        return { value: square, display: "hidden" };
      });
    });

    this.setState({
      grid: newGrid,
      height: this.state.tempheight,
      width: this.state.tempwidth,
      bombs: this.state.tempbombs,
      status: "alive",
      minutes: 0,
      seconds: 0,
      zeroPlace: 0,
    });

  }

  componentDidUpdate() {
    if (this.state.status !== "won") {
      this.checkWin(this.state.grid);
    }
  }

  componentDidMount() {
    // let newGrid = createGrid(this.state.width,this.state.height,this.state.bombs).map(row => {
    //   return row.map(square => {
    //     return { value: square, display: "hidden" };
    //   });
    // });
    //
    // //this.setState({ grid: newGrid });
  }

  render() {
    return (
      <div>
        <h1>{this.state.status}</h1>
        <SelectSize
          handleSubmit={this.handleSubmit}
          onChange={this.onChange}
          width={this.state.tempwidth}
          height={this.state.tempheight}
          bombs={this.state.tempbombs}
        />
        <h1>minutes: {this.state.minutes}:{this.state.zeroPlace}{this.state.seconds}</h1>
        <Board
          grid={this.state.grid}
          clicked={this.clicked}
          status={this.state.status}
          setFlag={this.setFlag}
          height={this.state.tempheight}
          width={this.state.tempwidth}
        />
        <PlayAgain aliveOrNot={this.state.status} />
      </div>
    );
  }
}

export default App;
