import Axios from '../utils/config/axios.config'
const API_KEY = process.env.REACT_APP_API_KEY

export const getCities = async (cityName) => {
  const { data } = await Axios.get(`/search.json?key=${API_KEY}&q='${cityName}'`)
  return data
}
