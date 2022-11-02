import axios from 'axios'

const AxiosConfig = axios.create({
  baseURL: 'http://api.weatherapi.com/v1'
})

export default AxiosConfig
