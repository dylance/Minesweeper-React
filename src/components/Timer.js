import React, { Component } from 'react';

class Timer extends Component {
  render() {
    return (
      <h1>minutes: {this.props.minutes}:{this.props.zeroPlace}{this.props.seconds}</h1>
    )
  }
}

export default Timer;
