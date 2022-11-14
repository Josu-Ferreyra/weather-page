import axios from 'axios'

const AxiosConfig = axios.create({
  baseURL: 'https://api.weatherapi.com/v1'
})

export default AxiosConfig
