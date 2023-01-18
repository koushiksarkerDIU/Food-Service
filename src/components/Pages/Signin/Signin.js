import React, { useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SignIn = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState();

    const handleCreateUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const imageURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user
                form.reset();
                setError('');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode, errorMessage)
            })
            .finally(() => {

            })
    }
    return (
        <div className="w-1/2 p-8 space-y-3 rounded-xl bg-gray-100 dark:text-gray-100 mt-10 mx-auto">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <form onSubmit={handleCreateUser} className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div className="space-y-1 text-sm">
                    <label for="username" className="block ">Enter your name</label>
                    <input type="text" name="name" id="username" placeholder="Enter your name" className="w-full px-4 py-3 rounded-md" />
                </div>
                <div className="space-y-1 text-sm">
                    <label for="username" className="block ">Enter your image url</label>
                    <input type="text" name="photoURL" id="username" placeholder="Enter your image url" className="w-full px-4 py-3 rounded-md" />
                </div>
                <div className="space-y-1 text-sm">
                    <label for="username" className="block ">Enter your email</label>
                    <input type="email" name="email" id="username" placeholder="Enter your email" className="w-full px-4 py-3 rounded-md" />
                </div>
                <div className="space-y-1 text-sm">
                    <label for="password" className="block ">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your Password" className="w-full px-4 py-3 rounded-md" />
                </div>
                <button type='submit' className="block w-1/2 mx-auto p-3 text-center border rounded bg-red-700 border-red-700 text-gray-100">Sign In</button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16"></div>
                <p className="px-3 text-sm text-gray-900">Login with social accounts</p>
                <div className="flex-1 h-px sm:w-16"></div>
            </div>
            <div className="flex justify-center space-x-4">
                <button aria-label="Log in with Google" className="p-3 bg-gray-300 rounded-3xl">
                    <FaGoogle />
                </button>
                <button aria-label="Log in with Google" className="p-3 bg-gray-300 rounded-3xl">
                    <FaTwitter />
                </button>
                <button aria-label="Log in with Google" className="p-3 bg-gray-300 rounded-3xl">
                    <FaGithub />
                </button>

            </div>
            <p className="text-xs text-center sm:px-6">Already hava a account?
                <Link to='/login' className="underline text-gray-900 font-semibold"> Login</Link>
            </p>
        </div>
    );
};

export default SignIn;