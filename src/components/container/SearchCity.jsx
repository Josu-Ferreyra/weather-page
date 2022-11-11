import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateCity } from '../../redux/actions/actions'
import { getCities } from '../../services/weatherService'
import '../../styles/SearchCity.css'

function SearchCity () {
  const dispatch = useDispatch()
  const [options, setOptions] = useState([])
  const [input, setInput] = useState('')
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    getCities(input)
      .then(cities => setOptions(cities))
  }, [input])

  return (
    <div className={`searchCity ${visible ? '' : 'hidden'}`}>
      <div className='searchContainer'>
        <input
          className='inputCity'
          placeholder='City'
          value={input}
          onChange={({ target }) => setInput(target.value)}
          onFocus={() => setVisible(true)}
        />
        <div className={`cityOptions ${visible ? '' : 'hideOptions'}`}>
          {
          options.map(option => {
            return (
              <button
                className='cityOption'
                key={option.id}
                value={option.name}
                onClick={() => {
                  dispatch(updateCity(option.name))
                  setInput(option.name)
                  setVisible(false)
                }}
              >
                {option.name}, {option.region}
              </button>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default SearchCity