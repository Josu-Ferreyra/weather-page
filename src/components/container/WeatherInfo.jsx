import { useEffect, useState } from 'react'
import { getWeather } from '../../services/weatherService'
import '../../styles/WeatherInfo.css'

function WeatherInfo ({ city }) {
  const [current, setCurrent] = useState({})
  const [forecast, setForecast] = useState([])
  useEffect(() => {
    getWeather(city)
      .then(({ current: c, forecast: f }) => {
        setCurrent(c)
        setForecast(f.forecastday)
      })
  }, [city])

  return (
    <div className='weatherInfo'>
      <h1>Weather Info: {city}</h1>
      <p>{current.temp_c}</p>
      {console.log(current)}
      <p>{forecast[0]?.date}</p>
    </div>
  )
}

export default WeatherInfo
