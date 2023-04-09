import React, { useContext, useState } from 'react'
import '../SignUp/SignUp.css'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/UserContext'

export default function SignUp() {
    const {createUser}=useContext(AuthContext);
   
    const handleRegister=event=>{
        event.preventDefault();
        const form = event.target;
        const email=form.email.value;
        const password=form.password.value;
        const confPassword=form.passwordConf.value;
        if(password.length<6){
            alert("password must have at least 6 characters")
            return;
        }
        if(password!==confPassword){
            alert("Your password did not match")
            return;
        }
        createUser(email,password)
        .then(result=>{
            const user = result.user;
            alert('new user created successfully')
            console.log(user);
            form.reset()
        })
        .catch(error=>{
            alert('user was not created')
        })
    }
  return (
    <div className='form-container'>
    <h2 className='form-heading'>Sign Up</h2>
    <form onSubmit={handleRegister}>

        <div className='form-control'>
             <label htmlFor='email'>Email</label>
             <input type='email' name='email' required/>
        </div>
        <div className='form-control'>
             <label htmlFor='password'>Password</label>
             <input type='password' name='password' required/>
        </div>
        <div className='form-control'>
             <label htmlFor='password'>Confirm password</label>
             <input type='password' name='passwordConf' required/>
        </div>
        <input className='submit-btn' type="submit" value='Register' />
    </form>
    <p className='redirect-to-sign-up'>Already have an Account? <Link to='/login'>Login</Link></p>
   
</div>
  )
}
