import React, { Component } from "react";
import { FaBomb, FaFlagCheckered } from "react-icons/fa";
import { setFlag } from "../actions/board";
import { connect } from "react-redux";

class Square extends Component {
  render() {
    if (this.props.status === "dead" && this.props.value.value === "B") {
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
            this.props.clicked();
          }}
          // onMouseDown={e => {
          // }}
          className="square"
          style={{ background: "#666" }}

          // right click
          onContextMenu={e => {
            e.preventDefault();
            console.log("Hellllo")
            this.props.dispatch(setFlag(this.props.board,5,5))
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
            this.props.setFlag();
          }}
        >
          <FaFlagCheckered />
        </button>
      );
    }

    return <button className="square">{this.props.value.value}</button>;
  }
}

function mapStateToProps({ board }) {
  return {
    board
  }
}

export default connect(mapStateToProps)(Square)
