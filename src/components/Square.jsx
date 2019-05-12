import React, { Component } from "react";
import { FaBomb, FaFlagCheckered } from "react-icons/fa";
import { setFlag, onClick } from "../actions/board";
import { makeMove } from "../actions/game";
import { connect } from "react-redux";

class Square extends Component {

  render() {
    //console.log("the fucking game is:  ", this.props.game)
    const { game, board, i, j } = this.props;

    if (game.status === "dead fool" && board[i][j].value === "B" ) {
      return (
        <button className="square" style={{ background: "red" }}>
          <FaBomb />
        </button>
      );
    }

    if (this.props.value.display === "hidden") {
      return (
        <button
          onClick={e => {
            e.preventDefault();
            this.props.dispatch(makeMove(game, board, i, j));
            this.props.dispatch(onClick(this.props.board,this.props.i,this.props.j));
          }}
          // onMouseDown={e => {
          // }}
          className="square"
          style={{ background: "#666" }}

          // right click
          onContextMenu={e => {
            e.preventDefault();
            console.log("Hellllo")
            this.props.dispatch(setFlag(board, i, j))
            //this.props.setFlag();
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
            this.props.dispatch(setFlag(this.props.board,this.props.i,this.props.j))
          }}
        >
          <FaFlagCheckered />
        </button>
      );
    }

    return <button className="square">{this.props.value.value}</button>;
  }
}

function mapStateToProps({ board, game }) {
  return {
    board,
    game
  }
}

export default connect(mapStateToProps)(Square)
