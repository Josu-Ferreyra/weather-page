import { Link } from 'react-router-dom'
import '../../styles/Navbar.css'

function Navbar () {
  return (
    <nav id='main-nav'>
      <ul>
        <li><Link className='main-nav-link' to='/search'>Search</Link></li>
        <li><Link className='main-nav-link' to='/current'>Current Weather</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
