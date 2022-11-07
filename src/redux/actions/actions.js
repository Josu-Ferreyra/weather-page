export const actionTypes = {
  UPDATE_CITY: 'UPDATE_CITY'
}

export const updateCity = (newCity) => {
  return {
    type: actionTypes.UPDATE_CITY,
    payload: {
      newCity
    }
  }
}
