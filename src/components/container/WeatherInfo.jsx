import { useEffect, useState } from 'react'
import { getWeather } from '../../services/weatherService'
import '../../styles/WeatherInfo.css'
import Forecast from '../pures/Forecast'

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
  useEffect(() => {
    console.log('CURRENT =>', current)
    console.log('FORECAST =>', forecast)
  })

  return (
    <div className='weatherInfo'>
      <h1>{city}</h1>
      <div className='condition'>
        <img src={current.condition?.icon} alt={current.condition?.text} />
        <p>{current.condition?.text}</p>
      </div>
      <div className='currentTemp'>
        <div className='tempCelcius'>
          <p>{current.temp_c}°C</p>
        </div>
        <div className='tempFahrenheit'>
          <p>{current.temp_f}°F</p>
        </div>
        <p className='lastUpdated'>
          Last Updated: {current.last_updated?.split(' ')[1]}
        </p>
      </div>
      {
        forecast.map((forecast) => (
          <Forecast
            key={forecast.date}
            day={forecast.day}
            date={forecast.date}
          />
        ))
      }
    </div>
  )
}

export default WeatherInfo
