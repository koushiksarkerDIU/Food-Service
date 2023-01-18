import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [userEmail, setUserEmail] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode, errorMessage)
            })
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError('')
                navigate(from, { replace: true });
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                setError(errorCode, errorMessage, email);
            });
    }

    const handleEmail = (e) => {
        const email = e.target.value;
        setUserEmail(email);
    }

    return (
        <div className="w-1/2 p-8 space-y-3 rounded-xl bg-gray-100 dark:text-gray-100 mt-10 mx-auto">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <form onSubmit={handleSignIn} className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block ">Enter your email</label>
                    <input onBlur={handleEmail} type="email" name="email" id="username" placeholder="Enter your email" className="w-full px-4 py-3 rounded-md" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block ">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your Password" className="w-full px-4 py-3 rounded-md" />
                    <div className="flex justify-end text-xs text-gray-500">
                        <Link>Forgot Password?</Link>
                    </div>
                </div>
                <div className='text-red-400 font-semibold'>
                    {error}
                </div>
                <button type='submit' className="block w-1/2 mx-auto p-3 text-center border rounded bg-red-700 border-red-700 text-gray-100">Login</button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16"></div>
                <p className="px-3 text-sm text-gray-900">Login with social accounts</p>
                <div className="flex-1 h-px sm:w-16"></div>
            </div>
            <div className="flex justify-center space-x-4">
                <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 bg-gray-300 rounded-3xl">
                    <FaGoogle />
                </button>
                <button aria-label="Log in with Google" className="p-3 bg-gray-300 rounded-3xl">
                    <FaTwitter />
                </button>
                <button aria-label="Log in with Google" className="p-3 bg-gray-300 rounded-3xl">
                    <FaGithub />
                </button>

            </div>
            <p className="text-xs text-center sm:px-6">Don't have an account?
                <Link to='/signin' className="underline text-gray-900 font-semibold">Sign up</Link>
            </p>
        </div>
    );
};

export default Login;