import React, { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'

import { AppRouter } from './router'

const GlobalStyle = createGlobalStyle`
  html, body, main, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
`

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <AppRouter />
    </Fragment>
  )
}

export default App
