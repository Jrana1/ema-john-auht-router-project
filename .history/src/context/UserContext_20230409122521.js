import React, { createContext } from 'react'
export const AuthContext = createContext();
const user = {email:'abc@gmail.com'}
const AuthInfo={user}
export default function UserContext({children}) {
  return (
    <AuthContext.Provider value={AuthInfo}>
        
        {children}
  
    </AuthContext.Provider>
  )
}
