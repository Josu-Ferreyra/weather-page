import SearchCityContainer from '../components/container/SearchCityContainer'
import '../styles/Search.css'

function Search () {
  return (
    <div className='searchCityPage'>
      <div className='searchTitle'>
        <h1>Weather App</h1>
        <p className='pageAuthor'>by Josué Ferreyra</p>
      </div>
      <SearchCityContainer />
    </div>
  )
}

export default Search
