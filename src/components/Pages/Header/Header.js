import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('logout successfully');
            })
            .catch((error) => {
                console.error(error);
            })
    }
    return (
        <div className="navbar bg-gray-200 lg:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/foods'>Foods</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        <li><Link to='/myreview'>My Reviews</Link></li>
                        <li><Link to='/addfood'>Add Food</Link></li>
                        <li><Link to='/signin'><button type="button" className="font-semibold border-2 rounded border-red-700 text-red-900 btn btn-sm btn-outline">Sign In</button></Link></li>
                        <li><Link to='/login'><button type="button" className="btn btn-sm font-semibold border rounded bg-red-700 border-red-700 text-gray-100">Login</button></Link></li>
                    </ul>
                </div>
                <img className='w-5 lg:w-10' src="https://foodcuration.org/wp-content/uploads/2016/05/food-curation-favicon-5-1.png" alt="" srcSet="" />
                <Link to='/' className="btn btn-ghost normal-case text-base lg:text-xl">Kuddus Online Food Delivery Service</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/foods'>Foods</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>

                    {
                        user?.uid ?
                            <>
                                <li><Link to='/myreview'>My Reviews</Link></li>
                                <li><Link to='/addfood'>Add Food</Link></li>
                            </> :
                            <>
                                <div></div>
                            </>

                    }
                </ul>
            </div>
            <div className='navbar-end hidden lg:flex'>
                {
                    user?.uid ?
                        <>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className=" rounded-full">
                                        {
                                            user?.photoURL ?
                                                <img className='' style={{ height: '50px', width: '50px', border: '1px solid white', borderRadius: '50%' }} src={user.photoURL} alt="" /> :
                                                <div>
                                                    <FaUser className='text-2xl'></FaUser>
                                                </div>
                                        }
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                    {
                                        user?.uid ? <>
                                            <li><span>{user.displayName}</span></li>
                                            <li><span onClick={handleLogOut}>Log Out</span></li>
                                        </> : <>
                                            <li><Link to='/login'>Login</Link></li>
                                            <li><Link to='/signin'>Sign In</Link></li>
                                        </>
                                    }
                                </ul>
                            </div>
                        </> : <div className="menu menu-horizontal px-1 gap-3">
                            <Link to='/signin'><button type="button" className="px-8 py-3 font-semibold border-2 rounded border-red-600 text-red-900 btn btn-outline">Sign In</button></Link>
                            <Link to='/login'><button type="button" className="px-8 py-3 font-semibold border rounded bg-red-600 border-red-700 text-gray-100">Login</button></Link>
                        </div>
                }

            </div>
            {/* <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className=" rounded-full">
                            {
                                user?.photoURL ?
                                    <img className='' style={{ height: '50px', width: '50px', border: '1px solid white', borderRadius: '50%' }} src={user.photoURL} alt="" /> :
                                    <div>
                                        <FaUser className='text-2xl'></FaUser>
                                    </div>
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        {
                            user?.uid ? <>
                                <li><span>{user?.displayName}</span></li>
                                <li><span onClick={handleLogOut}>Log Out</span></li>
                            </> : <>
                                <li><Link to='/login'>Login</Link></li>
                                <li><Link to='/signin'>Sign In</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div> */}
        </div>
    );
};

export default Header;