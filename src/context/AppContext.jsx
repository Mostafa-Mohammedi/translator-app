import React, { Children } from 'react'
import UserProvider from './UserContext'

const AppContext = ({children}) => {
  return (
    <UserProvider>
    {children}
    </UserProvider>
  )
}

export default AppContext;
