import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-gray-200 lg:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>Foods</Link></li>
                        <li><Link>Blogs</Link></li>
                        <li><Link><button type="button" className="font-semibold border-2 rounded border-red-700 text-red-900 btn btn-sm btn-outline">Sign In</button></Link></li>
                        <li><Link><button type="button" className="btn btn-sm font-semibold border rounded bg-red-700 border-red-700 text-gray-100">Login</button></Link></li>
                    </ul>
                </div>
                <img className='w-5 lg:w-10' src="https://foodcuration.org/wp-content/uploads/2016/05/food-curation-favicon-5-1.png" alt="" srcset="" />
                <Link className="btn btn-ghost normal-case text-lg lg:text-xl">Kuddus Online Food Service</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link>Foods</Link></li>
                    <li><Link>Blogs</Link></li>
                </ul>
            </div>
            <div className='navbar-end hidden lg:flex'>
                <div className="menu menu-horizontal px-1 gap-3">
                    <Link><button type="button" className="px-8 py-3 font-semibold border-2 rounded border-red-700 text-red-900 btn btn-outline">Sign In</button></Link>
                    <Link><button type="button" className="px-8 py-3 font-semibold border rounded bg-red-700 border-red-700 text-gray-100">Login</button></Link>
                </div>
            </div>
            {/* <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li><a>Profile</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div> */}
        </div>
    );
};

export default Header;