import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="flex items-center justify-center space-x-2">
            <div className="w-6 h-6 rounded-full animate-pulse bg-violet-600"></div>
            <div className="w-6 h-6 rounded-full animate-pulse bg-violet-600"></div>
            <div className="w-6 h-6 rounded-full animate-pulse bg-violet-600"></div>
        </div>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children
};

export default PrivateRoute;