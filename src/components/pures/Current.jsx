import { useState } from 'react'

function Current ({ current, city }) {
  const [isCelcius, setIsCelcius] = useState(true)
  const [otherCard, setOtherCard] = useState(false)
  return (
    <div className={`current ${otherCard ? 'reverse' : ''}`}>
      <div className={otherCard ? 'hideData' : 'showData'}>
        <h1>{city}</h1>
        <div className='currentTemp'>
          {
              isCelcius
                ? (
                  <p>{current.temp_c}°C</p>
                  )
                : (
                  <p>{current.temp_f}°F</p>
                  )
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
          onClick={() => setOtherCard(!otherCard)}
        >
          More info
        </button>
      </div>
      <div className={`reverse ${otherCard ? 'showData' : 'hideData'}`}>
        <div className='extraData'>
          <div className='extraDataCategory'>
            <i className='bi bi-droplet-fill' />
            <p>Humidity</p>
          </div>
          <p className='extraDataValue'>{current.humidity} %</p>
        </div>
        <div className='extraData'>
          <div className='extraDataCategory'>
            <i className='bi bi-wind' />
            <p>Wind</p>
          </div>
          <p className='extraDataValue'>{current.wind_kph} km/h</p>
        </div>
        <div className='extraData'>
          <div className='extraDataCategory'>
            <i className='bi bi-compass' />
            <p>Wind Direction</p>
          </div>
          <div className='extraDataCategory'>
            <p className='extraDataValue'>{current.wind_dir}</p>
            <i
              className='bi bi-arrow-up-circle-fill'
              style={{ rotate: `${current.wind_degree}deg` }}
            />
          </div>
        </div>
        <div className='extraData'>
          <div className='extraDataCategory'>
            <i className='bi bi-arrows-collapse' />            <p>Pressure</p>
          </div>
          <p className='extraDataValue'>{current.pressure_mb}mb</p>
        </div>
        <button
          className='btnReverseCard'
          onClick={() => setOtherCard(!otherCard)}
        >
          Go Back
        </button>
      </div>
    </div>
  )
}

export default Current
