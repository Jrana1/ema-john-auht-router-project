import React, { createContext } from 'react'
export const AuthContext = createContext();
const AuthInfo={}
export default function UserContext({children}) {
  return (
    <AuthContext.Provider value={AuthInfo}>
        
        {children}
  
    </AuthContext.Provider>
  )
}
