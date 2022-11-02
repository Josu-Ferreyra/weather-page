import PropTypes from 'prop-types'
// Styles
import '../../styles/InputCity.css'

function InputCity ({ setCity, city, options }) {
  const handleCity = ({ target }) => setCity(target.value)
  return (
    <div className='city'>
      <input
        className='city_input'
        type='text'
        placeholder='City'
        value={city}
        onChange={handleCity}
      />
      <div className='city_options'>
        {
          options.map((option) => {
            return (
              <button
                key={option.id}
                value={option.name}
                className='city_option'
                onClick={() => setCity(option.name)}
              >
                {option.name}, {option.region}
              </button>
            )
          })
        }
      </div>
    </div>
  )
}

InputCity.propTypes = {
  setCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
}

export default InputCity
