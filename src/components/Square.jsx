import React, { Component } from 'react'
import { FaBomb, FaFlagCheckered } from 'react-icons/fa'
import { connect } from 'react-redux'
import { setFlag, onClick } from '../actions/board'
import { makeMove } from '../actions/game'

class Square extends Component {
  render() {
    const {
      game, board, i, j,
    } = this.props

    if (game.status === 'dead fool' && board[i][j].value === 'B') {
      return (
        <button className='square' style={ { background: 'red' } }>
          <FaBomb />
        </button>
      )
    }

    if (this.props.value.display === 'hidden') {
      return (
        <button
          onClick={ (e) => {
            e.preventDefault()
            this.props.makeMove(game, board, i, j)
            this.props.onClick(board, i, j, game.width, game.height)
          } }
          className='square'
          style={ { background: '#666' } }
          // right click
          onContextMenu={ (e) => {
            e.preventDefault()
            this.props.setFlag(board, i, j)
          } }
        />
      )
    }

    if (this.props.value.display === 'flag') {
      return (
        <button
          className='square'
          onContextMenu={ (e) => {
            e.preventDefault()
            this.props.setFlag(this.props.board, this.props.i, this.props.j)
          } }
        >
          <FaFlagCheckered />
        </button>
      )
    }

    return <button className='square'>{this.props.value.value}</button>
  }
}

function mapStateToProps({ board, game }) {
  return {
    board,
    game,
  }
}

export default connect(mapStateToProps, { makeMove, onClick, setFlag })(Square)
