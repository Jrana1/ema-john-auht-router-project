import React from 'react'
import '../SignUp/SignUp.css'
import { Link } from 'react-router-dom'
export default function SignUp() {
  return (
    <div className='form-container'>
    <h2 className='form-heading'>Sign Up</h2>
    <form>

        <div className='form-control'>
             <label htmlFor='email'>Email</label>
             <input type='email' name='email' required/>
        </div>
        <div className='form-control'>
             <label htmlFor='password'>Password</label>
             <input type='password' name='password' required/>
        </div>
        <input className='submit-btn' type="submit" value='Register' />
    </form>
    <p className='redirect-to-sign-up'>Already have an Account? <Link to='/login'>Login</Link></p>
</div>
  )
}
