import React, { createContext, useState } from 'react'
 import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../firebase/firebase.config';
 const auth = getAuth(app);
export const AuthContext = createContext();

export default function UserContext({children}) {
    const [user,setUser]=useState(null);
    
    const createUser=(email,password)=>{

        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn=(email,password)=>{

        return signInWithEmailAndPassword(auth,email,password);
    }
    const AuthInfo={createUser,signIn}
  return (
    <AuthContext.Provider value={AuthInfo}>
        
        {children}
  
    </AuthContext.Provider>
  )
}
