import React from 'react'
import UserProvider from './UserContext'

/**
* AppContext is a React functional component that provides the UserContext to its child components.
* @param {Object} props - The component props.
* @param {React.ReactNode} props.children - The child components that will be wrapped by the UserProvider.
*/
const AppContext = ({children}) => {
  return (
    <UserProvider>
    {children}
    </UserProvider>
  )
}

export default AppContext;
