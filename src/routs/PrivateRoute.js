import React, { useContext } from 'react'
import { AuthContext } from '../context/UserContext'
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute({children}) {

    const{ user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(user && user?.uid){
        return children;
    }
    if(loading){
        return <div>loading ...</div>
    }
    return <Navigate to='/login' state={{from:location}} replace ></Navigate>
    
}
