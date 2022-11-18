import PropTypes from 'prop-types'
import { useState } from 'react'

function SearchCity ({ dispatch, action, city }) {
  const [showSearchbar, setShowSearchbar] = useState(false)
  return (
    <div
      className={`searchCity ${showSearchbar ? 'showSearch' : ''}`}
    >
      <input
        placeholder='City Name'
        value={city}
        onChange={({ target }) =>
          showSearchbar
            ? dispatch(action(target.value))
            : undefined}
      />
      <i
        className='bi bi-geo-alt'
        onClick={() => setShowSearchbar(!showSearchbar)}
      />
    </div>
  )
}

SearchCity.propTypes = {
  dispatch: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}

export default SearchCity
