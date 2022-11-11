import { actionTypes } from '../actions/actions'

export const visibilityReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_GLOBAL_VISIBILITY:
      return !state
    default:
      return state
  }
}
