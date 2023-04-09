import {React,useContext} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';
import { AuthContext } from '../../context/UserContext'
const Header = () => {
  const {user} = useContext(AuthContext);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>

                {
                   <> 
                   <Link to='login'>Login</Link>
                <Link to='signup'>SignUp</Link>
                </>
                
                }
            </div>
        </nav>
    );
};

export default Header;