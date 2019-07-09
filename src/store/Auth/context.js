import { createContext } from 'react'

export const AuthContext = createContext({
  isAuthorized: false,
  register: (email, password, name) => {}
})
