// Components
import { Navigate, Route, Routes } from 'react-router-dom'
// import Navbar from './components/pures/Navbar'
import Weather from './pages/Weather'
import Error404 from './pages/Error404'
import Search from './pages/Search'

function App () {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Navigate to='/search' />} />
        <Route path='/search' element={<Search />} />
        <Route path='/weather' element={<Weather />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default App
