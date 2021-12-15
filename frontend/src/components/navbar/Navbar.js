import React from 'react';
import './navbar.css';

const Navbar = ({ children }) => {
    return (
        <nav className='container-navbar'>
           <div className='navbar__box'>
                <div className='navbar__logo'>
                    <p>Login and Sigin</p>
                </div>
                <ul className='navbar__links'>
                    {children}
                </ul>
           </div>
        </nav>
    );
}


export default Navbar;