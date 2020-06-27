import React, { Component } from 'react'
import '../Button.css'

class PlayAgain extends Component {
  refreshPage = () => {
    window.location.reload()
  };

  render() {
    if (this.props.aliveOrNot !== 'alive') {
      return (
        <div>
          <button onClick={ this.refreshPage }>Play again?</button>
        </div>
      )
    }
    return null
  }
}

export default PlayAgain
