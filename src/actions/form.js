export const SET_ITEMS = 'SET_ITEMS'

export function setItems(data) {
  return {
    type: SET_ITEMS,
    payload: data,
  }
}
