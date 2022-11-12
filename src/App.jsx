// Components
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/pures/Navbar'
import Current from './pages/Current'
import Error404 from './pages/Error404'
import Search from './pages/Search'

function App () {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to='/search' />} />
        <Route path='/search' element={<Search />} />
        <Route path='/current' element={<Current />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default App
