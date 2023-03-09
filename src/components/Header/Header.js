import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import './Header.css';

const Header = () => {
    const {user, logOut}= useContext(AuthContext);
    return (
        <nav className='header'>
            <h2><i className="me-1 fa-solid fa-house-chimney-medical"></i>Medicine Shop</h2>
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Chekout</Link>
                <Link to="/about">About</Link>
                { user?.uid ?
                    <button className='btn-logout' onClick={logOut}>Log out</button> :
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link> 
                    </>
                }
                <span>{user?.email}</span>
            </div>
        </nav>
    );
};

export default Header;