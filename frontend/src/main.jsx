import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { store } from './components/redux/redux.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
