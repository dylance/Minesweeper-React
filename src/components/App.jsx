import React, { Component } from "react";
import { connect } from "react-redux";

import Board from "./Board";
import PlayAgain from "./PlayAgain";
import SelectSize from "./SelectSize";
import Timer from "./Timer";
import { checkWin } from "../actions/game";


class App extends Component {
  state = {
    minutes: 0,
    seconds: 0,
    zeroPlace: 0,
    timerOn: null,
  };

  componentDidUpdate() {
    // if (this.state.status !== "won") {
    //   //this.checkWin(this.state.grid);
    // }
    const { game, board } = this.props;
    if (game.status !== 'won') {
      this.props.dispatch(checkWin(game, board));
    }
  }

  render() {
    return (
      <div>
        <SelectSize />
        {
        // <Timer
        //   minutes={this.state.minutes}
        //   zeroPlace={this.state.zeroPlace}
        //   seconds={this.state.seconds}
        // />
        // <PlayAgain aliveOrNot={this.state.status} />
        }
        <h1>{this.props.game.status}</h1>
        <Board
          grid={this.props.board}
          height={this.props.game.height}
          width={this.props.game.width}
        />
      </div>
    );
  }
}

function mapStateToProps({ board, game }) {
  return {
    board,
    game
  }
}

export default connect(mapStateToProps)(App)
