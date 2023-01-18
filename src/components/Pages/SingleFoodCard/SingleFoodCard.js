import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEye, FaStar } from "react-icons/fa";

const SingleFoodCard = () => {
    const router = useParams();
    const { id } = router;
    const [food, setFood] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/food/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setFood(data.data)
                }
                else {
                    toast.error(data.error)
                }
            })
            .catch(error => toast.error(error.message))
    }, [])
    console.log(food);
    return (
        <div className="w-4/5 mx-auto my-5 p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-between pb-4 border-bottom">
            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src={food?.image} alt="" className="mx-auto block object-cover object-center w-4/5 rounded-md  dark:bg-gray-500" />
                </div>
                <div className="space-y-2">
                    <h3 className="text-2xl font-semibold dark:text-violet-400">{food?.title}</h3>
                    <p className="leading-snug dark:text-gray-400">{food.details}</p>
                </div>
                <div className="flex justify-around space-x-2 text-sm font-medium text-gray-500">
                    <button type="button" className="flex items-center p-1 space-x-1.5">
                        <span>Price: ${food?.price}</span>
                    </button>
                    <button type="button" className="flex items-center p-1 space-x-1.5">
                        <FaEye /><span> {food.total_view}</span>
                    </button>
                    <button type="button" className="flex items-center p-1 space-x-1.5">
                        <span>Ratting :  {food.ratting}</span> <FaStar />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleFoodCard;