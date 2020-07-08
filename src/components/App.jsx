import React, { Component } from 'react'
import { connect } from 'react-redux'

import Board from './Board'
import PlayAgain from './PlayAgain'
import SelectSize from './SelectSize'
import Timer from './Timer'
import { checkWin, resetStatus } from '../actions/game'
import { createBoard } from '../actions/board'

class App extends Component {
  state = {
    minutes: 0,
    seconds: 0,
    zeroPlace: 0,
    timerOn: null,
    board: []
  };

  componentDidUpdate() {
    // if (this.state.status !== "won") {
    //   //this.checkWin(this.state.grid);
    // }
    const { game, board } = this.props
    if (game.status !== 'won') {
      this.props.checkWin(game, board)
    }
  }

  async componentDidMount() {
    console.log("Did i mount")
    await this.props.createBoard(3,3,3)
    await this.props.resetStatus(3, 3, 3)
    var newArray = [];

  for (var i = 0; i < this.props.board.length ; i++) {
      newArray[i] = this.props.board[i].map(item => ({...item}))
  }
    await this.setState({
      board: newArray
    })
  }


  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("Was I checked!!!")
  //   let value = this.props.game == nextProps.board;
  //   console.log("The value is: ", value)
  //   return value
  // }

  render() {
    console.log("app has been rendered")
    return (
      <div className='game-wrapper'>
        <SelectSize />
        {
          // <Timer
          //   minutes={this.state.minutes}
          //   zeroPlace={this.state.zeroPlace}
          //   seconds={this.state.seconds}
          // />
          // <PlayAgain aliveOrNot={this.state.status} />
        }

        <Board
          grid={ this.state.board }
          height={ 3 }
          width={ 3 }
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    board: state.board,
    game: state.game
  }
}

export default connect(mapStateToProps, { createBoard, checkWin, resetStatus })(App)
