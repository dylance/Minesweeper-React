import { CREATE_BOARD, SET_FLAG, ON_CLICK } from "../actions/board";

import createGrid from "../utils/createGrid";

export default function board(state = createGrid(10,10,5), action) {
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
