import PropTypes from 'prop-types'

function SearchCity ({ dispatch, action, city }) {
  return (
    <form>
      <input
        className='inputCity'
        placeholder='City'
        value={city}
        onChange={({ target }) => dispatch(action(target.value))}
      />
    </form>
  )
}

SearchCity.propTypes = {
  dispatch: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}

export default SearchCity
