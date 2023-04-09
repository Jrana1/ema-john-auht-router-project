import React, { createContext } from 'react'
 import { getAuth } from 'firebase/auth'
import app from '../firebase/firebase.config';
 const auth = getAuth(app);
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
