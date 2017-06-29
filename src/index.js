import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import './styles/app.css'
import configureStore from './store/configureStore'
import { BrowserRouter } from 'react-router-dom'
import { routes } from './routes'

const store = configureStore()

render(
  <Provider store={store}>
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
