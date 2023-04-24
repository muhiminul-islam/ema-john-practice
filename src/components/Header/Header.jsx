import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {

    const {logOut, user} = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
        .then(result => {})
        .catch(error => console.error(error))
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                <button onClick={handleSignOut}>Log Out</button>
                {user && <span className='text-white'>{user.email}</span>}
            </div>
        </nav>
    );
};

export default Header;