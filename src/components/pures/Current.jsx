import { useState } from 'react'

function Current ({ current, city }) {
  const [isCelcius, setIsCelcius] = useState(true)
  return (
    <div className='current'>
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
    </div>
  )
}

export default Current
