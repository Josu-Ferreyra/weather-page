import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getWeather } from '../../services/weatherService'
import Current from '../pures/Current'
import Forecast from '../pures/Forecast'

function WeatherContainer () {
  const navigate = useNavigate()
  const city = useSelector(state => state.city)
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
    console.log({ current, forecast })
  })

  return (
    <div className='weatherInfo'>
      <button
        onClick={() => navigate('/search')}
        className='return'
      >
        <i className='bi bi-caret-left-fill' />
      </button>
      <Current current={current} city={city} />
      <h2 className='forecastTitle'>Forecast</h2>
      <div className='forecastContainer'>
        {
          forecast.map((forecast, index) => (
            <Forecast
              key={forecast.date}
              day={forecast.day}
              date={`${index}`}
            />
          ))
        }
      </div>
    </div>
  )
}

export default WeatherContainer
