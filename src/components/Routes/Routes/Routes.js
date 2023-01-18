import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AllFoodDetails from "../../Pages/AllFoodDetails/AllFoodDetails";
import Home from "../../Pages/Home/Home";
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
                element: <SingleFoodCard></SingleFoodCard>
            }
        ]
    }
])