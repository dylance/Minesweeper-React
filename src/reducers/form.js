import { SET_ITEMS } from '../actions/form';

const initialState = {
  height: 0,
  width: 0,
  bombs: 0,
}

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_ITEMS:
      return {
        ...state,
        height: action.payload.height,
        width: action.payload.width,
        bombs: action.payload.bombs
      }
    default:
      return state;
  }
}
