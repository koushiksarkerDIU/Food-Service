import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddFood from "../../Pages/AddFood/AddFood";
import AllFoodDetails from "../../Pages/AllFoodDetails/AllFoodDetails";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import SignIn from "../../Pages/Signin/Signin";
import SingleFoodCard from "../../Pages/SingleFoodCard/SingleFoodCard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/foods',
                element: <AllFoodDetails />
            },
            {
                path: '/food/:id',
                element: <SingleFoodCard />
            },
            {
                path: '/addfood',
                element: <PrivateRoute><AddFood /></PrivateRoute>
            },
            {
                path: '/myreview',
                element: <PrivateRoute><MyReview /></PrivateRoute>
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signin',
                element: <SignIn />
            }
        ]
    }
])