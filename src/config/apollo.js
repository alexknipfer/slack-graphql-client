import ApolloClient from 'apollo-boost'

import { appConfig } from './appConfig'

export const apolloClient = new ApolloClient({
  uri: appConfig.apolloServerUri
})
