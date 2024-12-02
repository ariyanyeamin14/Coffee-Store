import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const links = <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/addCoffee'}>Add Coffee</NavLink>
        <NavLink to={'/signin'}>Signin</NavLink>
        <NavLink to={'/signup'}>SignUp</NavLink>
        <NavLink to={'/users'}>Users</NavLink>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-4">
                                {
                                    links
                                }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Coffee Store</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;