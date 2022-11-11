export const actionTypes = {
  UPDATE_CITY: 'UPDATE_CITY',
  TOGGLE_GLOBAL_VISIBILITY: 'TOGGLE_GLOBAL_VISIBILITY'
}

export const updateCity = (newCity) => {
  return {
    type: actionTypes.UPDATE_CITY,
    payload: {
      newCity
    }
  }
}

export const toggleVisibility = () => {
  return {
    type: actionTypes.TOGGLE_GLOBAL_VISIBILITY,
    payload: {}
  }
}
