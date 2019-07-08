import React from 'react'
import { ApolloProvider } from 'react-apollo-hooks'
import { createGlobalStyle } from 'styled-components'

import { AppRouter } from './router'
import { apolloClient } from './config/apollo'

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
    <ApolloProvider client={apolloClient}>
      <GlobalStyle />
      <AppRouter />
    </ApolloProvider>
  )
}

export default App
