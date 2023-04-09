import React, { createContext, useEffect, useState } from 'react'
 import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';
 const auth = getAuth(app);
export const AuthContext = createContext();

export default function UserContext({children}) {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth);
    }
    useEffect(
        ()=>{
          const unSubscribe=  onAuthStateChanged(auth,createUser=>{
                setUser(createUser)
                setLoading(false)
            });
            return ()=> unSubscribe();
        }
      
        ,[])
    const AuthInfo={user,createUser,signIn,logOut,loading}
  return (
    <AuthContext.Provider value={AuthInfo}>
        
        {children}
  
    </AuthContext.Provider>
  )
}
