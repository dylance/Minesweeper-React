import { CREATE_BOARD, SET_FLAG, ON_CLICK } from "../actions/board";

export default function board(state = [], action) {
  switch (action.type) {
    case CREATE_BOARD:
      return action.board
    case SET_FLAG:
      return action.board
    case ON_CLICK:
      return action.board
    default:
      return state;
  }
}
