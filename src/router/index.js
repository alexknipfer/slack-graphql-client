import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { DefaultLayoutRoute } from './components/DefaultLayoutRoute'
import { Messages } from '../views/Messages/Messages'
import { Register } from '../views/Register/Register'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/register" component={Register} />
        <DefaultLayoutRoute exact component={Messages} />
      </Switch>
    </BrowserRouter>
  )
}
