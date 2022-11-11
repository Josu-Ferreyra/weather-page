import { combineReducers } from 'redux'
import { cityReducer } from './cityReducer'
import { visibilityReducer } from './visibilityReducer'

export const rootReducer = combineReducers({
  city: cityReducer,
  globalVisibility: visibilityReducer
})
