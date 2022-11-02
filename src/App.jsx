// Components
import { useState } from 'react'
import SearchCity from './components/container/SearchCity'
import WeatherInfo from './components/container/WeatherInfo'

function App () {
  const [city, setCity] = useState('Mendoza')

  return (
    <div className='app'>
      <SearchCity setCity={setCity} />
      <WeatherInfo city={city} />
    </div>
  )
}

export default App
