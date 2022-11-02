// Requires
import { useEffect, useState } from 'react'
import { getCities } from '../../services/weatherService'
// Components
import InputCity from '../pures/InputCity'
// Styles
import '../../styles/Header.css'

function Header () {
  const [city, setCity] = useState('Mendoza')
  const [options, setOptions] = useState([])

  useEffect(() => {
    getCities(city).then(cities => setOptions(cities))
  }, [city])

  return (
    <header className='header'>
      <nav className='header_nav'>
        <InputCity options={options} city={city} setCity={setCity} />
      </nav>
    </header>
  )
}

export default Header
