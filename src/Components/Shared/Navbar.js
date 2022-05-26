import React from 'react';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { signOut } from 'firebase/auth';
import auth from '../../.firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };
    const meanuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allproducts'>Products</Link></li>
        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>
        }
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
        <li>
            {user ? (
                <button onClick={logout}>
                    Sign Out <FontAwesomeIcon icon={faRightFromBracket} />{" "}
                </button>
            ) : (
                <Link className="rounded-lg" to="/login">
                    Login
                </Link>
            )}
        </li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {meanuItems}
                    </ul>
                </div>
                <Link to='/home' className="btn btn-ghost normal-case text-xl text-primary-focus"><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {meanuItems}
                </ul>
            </div>
            <div className='navbar-end'>
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>    
            </div>
        </div>
    );
};

export default Navbar;