import React from 'react'
import '../Login/Login.css'
export default function Login() {
  return (
    <div className='form-container'>
        <h2 className='form-heading'>Login</h2>
        <form>

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
    </div>
  )
}
