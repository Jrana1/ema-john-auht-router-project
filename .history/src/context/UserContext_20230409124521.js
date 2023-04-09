import React, { createContext, useState } from 'react'
 import { getAuth } from 'firebase/auth'
import app from '../firebase/firebase.config';
 const auth = getAuth(app);
export const AuthContext = createContext();
// onst [user,setUser]=useState(null);
const AuthInfo={}
export default function UserContext({children}) {
  return (
    <AuthContext.Provider value={AuthInfo}>
        
        {children}
  
    </AuthContext.Provider>
  )
}
