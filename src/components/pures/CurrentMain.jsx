import { useState } from 'react'
import PropTypes from 'prop-types'

function CurrentMain ({ city, current, reverse, setReverse }) {
  const [isCelcius, setIsCelcius] = useState(true)

  return (
    <div
      className={reverse ? 'hideData' : 'showData'}
    >
      <h1>{city}</h1>
      <div className='currentTemp'>
        {
          isCelcius
            ? <p>{current.temp_c}°C</p>
            : <p>{current.temp_f}°F</p>
        }
        <button onClick={() => setIsCelcius(!isCelcius)}>
          {isCelcius ? 'Change to °F' : 'Change to °C'}
        </button>
      </div>

      <div className='condition'>
        <img src={current.condition?.icon} alt={current.condition?.text} />
        <p>{current.condition?.text}</p>
      </div>

      <p className='lastUpdated'>
        Last Updated: {current.last_updated?.split(' ')[1]}
      </p>

      <button
        className='btnReverseCard'
        onClick={() => setReverse(!reverse)}
      >
        More info
      </button>
    </div>
  )
}

CurrentMain.propTypes = {
  city: PropTypes.string.isRequired,
  current: PropTypes.object.isRequired,
  reverse: PropTypes.bool.isRequired,
  setReverse: PropTypes.func.isRequired
}

export default CurrentMain
