import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from '../reducers/rootReducer'

export const configStore = () => {
  const newStore = configureStore({ reducer: rootReducer })
  return newStore
}
