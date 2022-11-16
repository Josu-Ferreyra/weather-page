import { useNavigate } from 'react-router-dom'
import '../styles/Error404.css'

function Error404 () {
  const navigate = useNavigate()
  return (
    <div className='errorContainer'>
      <div className='error404'>
        <i className='bi bi-4-square-fill' />
        <i className='bi bi-0-square-fill' />
        <i className='bi bi-4-square-fill' />
      </div>
      <p>Page not found</p>
      <button onClick={() => navigate('/search')}>
        Go home
      </button>
    </div>
  )
}

export default Error404
