import React from 'react'
import App from './containers/App'
import Item from './components/Item'
import NotFound from './components/NotFound'

import { Route, Switch } from 'react-router-dom'

export const routes = (
  <div>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/items/:n' component={Item} />
      <Route component={NotFound} />
    </Switch>
  </div>
)
