import { actionTypes } from '../actions/actions'

const initialState = window.sessionStorage.getItem('city') ?? 'Mendoza'

export const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CITY:
      window.sessionStorage.setItem('city', action.payload.newCity)
      return action.payload.newCity
    default:
      return state
  }
}
