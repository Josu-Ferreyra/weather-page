import { useEffect, useState } from 'react'
import { getCurrentWeather } from '../../services/weatherService'
import '../../styles/WeatherInfo.css'

function WeatherInfo ({ city }) {
  const [current, setCurrent] = useState({})
  useEffect(() => {
    getCurrentWeather(city)
      .then(({ current: c }) => setCurrent(c))
      .catch(e => setCurrent({}))
  }, [city])

  return (
    <div className='weatherInfo'>
      <h1>Weather Info: {city}</h1>
      <p>{current.feelslike_c}</p>
    </div>
  )
}

export default WeatherInfo
