import { combineReducers } from 'redux'
import board from './board'
import game from './game'
import form from './form'

export default combineReducers({board, game, form})
