import PropTypes from 'prop-types'

function CurrentReverse ({ current, reverse, setReverse }) {
  return (
    <div className={`reverse ${reverse ? 'showData' : 'hideData'}`}>

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
          <i className='bi bi-arrows-collapse' />
          <p>Pressure</p>
        </div>
        <p className='extraDataValue'>{current.pressure_mb}mb</p>
      </div>

      <button
        className='btnReverseCard'
        onClick={() => setReverse(!reverse)}
      >
        Go Back
      </button>
    </div>
  )
}

CurrentReverse.propTypes = {
  current: PropTypes.object.isRequired,
  reverse: PropTypes.bool.isRequired,
  setReverse: PropTypes.func.isRequired
}

export default CurrentReverse
