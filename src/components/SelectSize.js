import React, { Component } from 'react';

class SelectSize extends Component {
  render () {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <label>
            Width:
            <input type="text" placeholder="" name="width" value={this.props.tempWidth} onChange={this.props.onChange} />
          </label>
          <label>
            Height:
            <input type="text" name="height" value={this.props.tempHeight} onChange={this.props.onChange} />
          </label>
          <label>
            Bombs:
            <input type="text" name="bombs" value={this.props.tempBombs} onChange={this.props.onChange} />
          </label>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    )
  }
}

export default SelectSize;
