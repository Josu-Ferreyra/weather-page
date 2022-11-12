import { actionTypes } from '../actions/actions'

export const cityReducer = (state = 'Mendoza', action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CITY:
      return action.payload.newCity
    default:
      return state
  }
}
