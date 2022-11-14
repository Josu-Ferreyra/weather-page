import PropTypes from 'prop-types'

function SearchCity ({ dispatch, action, city }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Seleccione una de las opciones')
  }
  return (
    <form id='searchCity' onSubmit={handleSubmit}>
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
