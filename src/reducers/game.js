import { CHECK_BOMB } from "../actions/game";
import { CHECK_WIN } from "../actions/game";

export default function game(state = {status: 'alive', width: 0, height: 0, bombs: 0}, action) {
  switch (action.type) {
    case CHECK_BOMB:
      return action.payload;
    case CHECK_WIN:
      return action.payload;
    default:
      return state;
  }
}
