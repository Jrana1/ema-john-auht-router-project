import React, { createContext, useEffect, useState } from 'react'
 import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
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
    const logOut=()=>{

        return signOut(auth);
    }
    useEffect(
        ()=>{
          const unSubscribe=  onAuthStateChanged(auth,createUser=>{
                setUser(createUser)
            });
            return ()=> unSubscribe();
        }
      
        ,[])
    const AuthInfo={user,createUser,signIn}
  return (
    <AuthContext.Provider value={AuthInfo}>
        
        {children}
  
    </AuthContext.Provider>
  )
}
