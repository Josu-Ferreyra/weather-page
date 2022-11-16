import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

function ShowCityOptions ({ options, dispatch, action }) {
  const navigate = useNavigate()
  return (
    <div className='cityOptions'>
      {
        options.map(option => {
          return (
            <button
              key={option.id}
              className='cityOption'
              onClick={() => {
                dispatch(action(option.name))
                navigate('/weather')
              }}
            >
              {option.name}, {option.region}
            </button>
          )
        })
      }
    </div>
  )
}

ShowCityOptions.propTypes = {
  options: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired
}

export default ShowCityOptions
