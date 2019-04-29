import { CREATE_BOARD } from "../actions/board";

export default function board(state = {status: 'alive', width: 0, height: 0, bombs: 0}, action) {
  switch (action.type) {
    case CREATE_BOARD:
      return action.board
    default:
      return state;
  }
}
