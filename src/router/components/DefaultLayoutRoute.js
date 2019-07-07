import React from 'react'
import { parse } from 'query-string'
import { Route } from 'react-router-dom'

import { DefaultLayout } from '../../layouts/DefaultLayout'

export function DefaultLayoutRoute({ component, ...rest }) {
  const parsedQueryParams = {
    queryParams: rest.location ? parse(rest.location.search) : {}
  }

  if (component) {
    const Component = component

    return (
      <Route
        {...rest}
        render={props => (
          <DefaultLayout {...props}>
            <Component {...props} {...parsedQueryParams} />
          </DefaultLayout>
        )}
      />
    )
  } else {
    return null
  }
}
