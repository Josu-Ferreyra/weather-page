// Utils
import ReactDOM from 'react-dom/client'
// Styles
import './styles/index.css'
// Components
import App from './App'
import { Provider } from 'react-redux'
import { configStore } from './redux/store/configStore'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={configStore()}>
    <App />
  </Provider>
)
