// Utility
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCities } from '../../services/weatherService'
import { updateCity } from '../../redux/actions/actions'
// Childs Components
import SearchCity from '../pures/SearchCity'
import ShowCityOptions from '../pures/ShowCityOptions'

function SearchCityContainer () {
  const dispatch = useDispatch()
  const city = useSelector(state => state.city)
  const [options, setOptions] = useState([])

  useEffect(() => {
    getCities(city)
      .then(cities => setOptions(cities))
  }, [city])

  return (
    <>
      <SearchCity city={city} dispatch={dispatch} action={updateCity} />
      <ShowCityOptions options={options} dispatch={dispatch} action={updateCity} />
    </>
  )
}

export default SearchCityContainer
