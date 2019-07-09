import React from 'react'
import { ApolloProvider } from 'react-apollo-hooks'
import { createGlobalStyle } from 'styled-components'

import { AppRouter } from './router'
import { apolloClient } from './config/apollo'
import { AuthProvider } from './store/Auth/provider'

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
      <AuthProvider>
        <GlobalStyle />
        <AppRouter />
      </AuthProvider>
    </ApolloProvider>
  )
}

export default App
