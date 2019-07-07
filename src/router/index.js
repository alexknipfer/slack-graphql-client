import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import { DefaultLayoutRoute } from './components/DefaultLayoutRoute'
import { Messages } from '../views/Messages/Messages'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <DefaultLayoutRoute exact component={Messages} />
      </Switch>
    </BrowserRouter>
  )
}
