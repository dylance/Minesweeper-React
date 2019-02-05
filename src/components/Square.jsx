import React, { Component } from "react";

class Square extends Component {
  state = {
    hidden: true
  }

  clicked = () => {
    this.setState({hidden: false})
  }

  render() {

    if (this.props.value.display === 'hidden') {
      return <button onClick={this.props.clicked} className="square" style={{background: '#666'}}></button>;
    }
    return (
      <button className="square">{this.props.value.value}</button>
    )
  }
};

export default Square;
