import PropTypes from 'prop-types'
import { useState } from 'react'
// import '../../styles/Forecast.css'

function Forecast ({ day, date }) {
  const [isCelcius, setIsCelcius] = useState(true)
  const showDate = {
    0: 'Today',
    1: 'Tomorrow',
    2: 'The Day After Tomorrow'
  }
  return (
    <div className='forecast'>
      <h2 className='date'>{showDate[date]}</h2>
      <div className='maxminTemp'>
        <div className='icons'>
          <i className='bi bi-thermometer-sun' />
          <h4>Max Temp</h4>
        </div>
        {
          isCelcius
            ? <p>{day.maxtemp_c}°C</p>
            : <p>{day.maxtemp_f}°F</p>
        }
      </div>
      <div className='maxminTemp'>
        <div className='icons'>
          <i className='bi bi-thermometer-snow' />
          <h4>Min Temp</h4>
        </div>
        {
          isCelcius
            ? <p>{day.mintemp_c}°C</p>
            : <p>{day.mintemp_f}°F</p>
        }
      </div>
      <button onClick={() => setIsCelcius(!isCelcius)}>
        {isCelcius ? 'Change to °F' : 'Change to °C'}
      </button>
      <div className='probability'>
        <h3>Probability</h3>
        <div className='rain'>
          <i className='bi bi-cloud-rain-heavy' />
          <p>
            Rain: {day.daily_chance_of_rain}%
          </p>
        </div>
        <div className='snow'>
          <i className='bi bi-cloud-snow' />
          <p>
            Snow: {day.daily_chance_of_snow}%
          </p>
        </div>
      </div>
    </div>
  )
}

Forecast.propTypes = {
  day: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired
}

export default Forecast
