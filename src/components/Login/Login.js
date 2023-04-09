import React, { useContext } from 'react'
import '../Login/Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/UserContext'
export default function Login() {
    const{signIn}=useContext(AuthContext)
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()
    const handleLogin=event=>{
        event.preventDefault();
        const form = event.target;
        const email=form.email.value;
        const password=form.password.value;
        signIn(email,password)
        .then(result=>{
            const user=result.user;
            navigate(from,{replace:true})
            
        })
        .catch(error=>{
            alert("email or password is wrong")
        })
    }
  return (
    <div className='form-container'>
        <h2 className='form-heading'>Login</h2>
        <form onSubmit={handleLogin}>

            <div className='form-control'>
                 <label htmlFor='email'>Email</label>
                 <input type='email' name='email' required/>
            </div>
            <div className='form-control'>
                 <label htmlFor='password'>Password</label>
                 <input type='password' name='password' required/>
            </div>
            <input className='submit-btn' type="submit" value='Submit' />
        </form>
        <p className='redirect-to-sign-up'>Don't have an account? <Link to='/signup'>Create a New Account</Link></p>
    </div>
  )
}
