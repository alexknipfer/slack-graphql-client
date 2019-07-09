import React, { useState, useEffect } from 'react'
import gql from 'graphql-tag'
import { useMutation } from 'react-apollo-hooks'

import { AuthContext } from './context'

const REGISTER_MUTATION = gql`
  mutation register($email: String!, $password: String!, $name: String!) {
    register(email: $email, password: $password, name: $name) {
      id
      name
      email
    }
  }
`

export function AuthProvider({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const register = useMutation(REGISTER_MUTATION)

  useEffect(() => {
    const authToken = localStorage.getItem('auth-token')

    if (!authToken) {
      setIsAuthorized(false)
    } else {
      setIsAuthorized(true)
    }
  }, [])

  const handleRegister = async (email, password, name) => {
    const user = await register({
      variables: { email, password, name }
    })

    // TODO - set user in user context, redirect to messages view
  }

  return (
    <AuthContext.Provider value={{ register: handleRegister, isAuthorized }}>
      {children}
    </AuthContext.Provider>
  )
}
