import PropTypes from 'prop-types'
import '../../styles/Forecast.css'

function Forecast ({ day, date }) {
  const showDate = {
    0: 'Today',
    1: 'Tomorrow',
    2: 'The Day After Tomorrow'
  }
  return (
    <div className='forecast'>
      <h2>{showDate[date]}</h2>
      <div className='maxTemp'>
        <h4>Max Temp:</h4>
        <p>{day.maxtemp_c}°C</p>
        <p>{day.maxtemp_f}°F</p>
      </div>
      <div className='minTemp'>
        <h4>Min Temp:</h4>
        <p>{day.mintemp_c}°C</p>
        <p>{day.mintemp_f}°F</p>
      </div>
      <div className='probability'>
        <div className='rain'>
          <p>
            Rain Probability: {day.daily_chance_of_rain}%
          </p>
        </div>
        <div className='snow'>
          <p>
            Snow Probability: {day.daily_chance_of_snow}%
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
