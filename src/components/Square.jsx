import React, { Component } from "react";
import { FaBomb, FaFlagCheckered } from "react-icons/fa";
import { connect } from "react-redux";
import { setFlag, onClick } from "../actions/board";
import { makeMove } from "../actions/game";

class Square extends Component {
  state = {
    board: []
  }
  async componentDidMount() {
    //console.log("Did i mount")
    // await this.props.createBoard(3,3,3)
    // await this.props.resetStatus(3, 3, 3)
    var newArray = [];

  for (var i = 0; i < this.props.board.length ; i++) {
      newArray[i] = this.props.board[i].map(item => ({...item}))
  }
  await this.setState({
    board: newArray
  })
}

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Was I checked")
    if (this.state.board.length > 0){
       console.log("the first guy is: ", this.state.board[this.props.i][this.props.j].display)
        console.log("the second guy is: ", nextProps.board[nextProps.i][nextProps.j].display)

    }

    return this.state.board.length > 0 && this.state.board[this.props.i][this.props.j].display != nextProps.board[nextProps.i][nextProps.j].display;  }

  render() {
    console.log("I haveLLL been rendered");
    //console.log("the first guy is: ", this.props.board[this.props.i][this.props.j].display)
    const { game, board, i, j } = this.props;

    if (game.status === "dead fool" && board[i][j].value === "B") {
      return (
        <button className="square" style={{ background: "red" }}>
          <FaBomb />
        </button>
      );
    }

    if (this.props.board[i][j].display === "hidden") {
      return (
        <button
          onClick={e => {
            e.preventDefault();
            this.props.makeMove(game, board, i, j);
            this.props.onClick(board, i, j, game.width, game.height);
          }}
          className="square"
          style={{ background: "#666" }}
          // right click
          onContextMenu={e => {
            e.preventDefault();
            this.props.setFlag(board, i, j);
          }}
        />
      );
    }

    if (this.props.value.display === "flag") {
      return (
        <button
          className="square"
          onContextMenu={e => {
            e.preventDefault();
            this.props.setFlag(this.props.board, this.props.i, this.props.j);
          }}
        >
          <FaFlagCheckered />
        </button>
      );
    }

    return <button className="square">{this.props.board[i][j].value}</button>;
  }
}

function mapStateToProps({ board, game }) {
  return {
    board,
    game
  };
}

export default connect(mapStateToProps, { makeMove, onClick, setFlag })(Square);
