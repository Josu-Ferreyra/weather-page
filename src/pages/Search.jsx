import SearchCityContainer from '../components/container/SearchCityContainer'
import '../styles/Search.css'

function Search () {
  return (
    <div id='searchCityPage'>
      <h1 id='searchTitle'>Weather App</h1>
      <p className='pageAuthor'>by Josué Ferreyra</p>
      <SearchCityContainer />
    </div>
  )
}

export default Search
