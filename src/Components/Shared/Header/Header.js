import './Header.css'
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logo2.png'
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <header>
            <nav>
                <div>
                    <Link to='/' className='logo-title'>
                        <img src={logo} alt="" />
                        <h5>Mobile Point</h5>
                    </Link>
                </div>
                <div className='link-container'>
                    <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/home'>Home</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/blog'>Blog</NavLink>
                    {
                        user && <>
                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/manageInventories'>Manage Items</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/addItem'>Add Item</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/myItems'>My Items</NavLink>
                        </>
                    }

                    {
                        user ?
                            <button className='signout-btn' onClick={handleSignOut}>Sign Out</button>
                            :
                            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/login'>Login</NavLink>
                    }
                </div>
            </nav>
        </header>
    );
};

export default Header;