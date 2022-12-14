// Utils
import ReactDOM from 'react-dom/client'
// Styles
import './styles/index.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// Components
import App from './App'
import { Provider } from 'react-redux'
import { configStore } from './redux/store/configStore'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={configStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
