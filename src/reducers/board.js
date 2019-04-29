import { CREATE_BOARD } from "../actions/board";
import { SET_FLAG } from "../actions/board";
import createGrid from "../utils/createGrid";

export default function board(state = createGrid(10,10,5), action) {
  switch (action.type) {
    case CREATE_BOARD:
      return action.board
    case SET_FLAG:
      return action.board
    default:
      return state;
  }
}
