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
                <button onClick={() => signOut(auth)}>
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
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {meanuItems}
                    </ul>
                </div>
                <Link to='/home' class="btn btn-ghost normal-case text-xl text-primary-focus"><img src={logo} alt="" /></Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {meanuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;