import { useState } from 'react'
import { UserContext } from './UserContext'

const user = {
    id: 123,
    name: 'klee collage',
    email: 'klee@gmail.com'
}

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState()

  return (
      // <userContext.Provider value={{ hola: 'Mundo', user: user }}>
      <UserContext.Provider value={{ user, setUser }}>
          { children }
    </UserContext.Provider>
  )
}
