import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddFood from "../../Pages/AddFood/AddFood";
import AllFoodDetails from "../../Pages/AllFoodDetails/AllFoodDetails";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home";
import MyReview from "../../Pages/MyReview/MyReview";
import SingleFoodCard from "../../Pages/SingleFoodCard/SingleFoodCard";

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
                element: <AddFood />
            },
            {
                path: '/myreview',
                element: <MyReview />
            },
            {
                path: '/blogs',
                element: <Blogs />
            }
        ]
    }
])