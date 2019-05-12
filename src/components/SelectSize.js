import React, { Component } from 'react';
import { connect } from "react-redux";

import { createBoard } from "../actions/board";

class SelectSize extends Component {
  state = {
    width: null,
    height: null,
    bombs: null,
  }


  handleSubmit = event => {
    const { width, height, bombs } = this.state;
    event.preventDefault();
    console.log("Submit has been handled")
    this.props.createBoard(height, width, bombs);
    //this.props.dispatch(resetStatus());
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
    console.log("The state is: ", this.state)
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Width:
            <input type="text" placeholder="" name="width" value={this.state.width} onChange={this.onChange} />
          </label>
          <label>
            Height:
            <input type="text" name="height" value={this.state.height} onChange={this.onChange} />
          </label>
          <label>
            Bombs:
            <input type="text" name="bombs" value={this.state.bombs} onChange={this.onChange} />
          </label>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ board, game }) {
  return {
    board,
    game
  }
}

export default connect(mapStateToProps, { createBoard })(SelectSize);
