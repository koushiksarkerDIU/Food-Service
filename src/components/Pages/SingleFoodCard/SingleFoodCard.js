import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaEye, FaStar, FaUser } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SingleFoodCard = () => {
    const router = useParams();
    const { id } = router;
    const { user } = useContext(AuthContext);
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
    return (
        <div>
            <div className="w-4/5 mx-auto my-5 p-4 shadow-md">
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
            <div>

                {
                    user ? <div className="flex flex-col w-1/2 mx-auto p-8 shadow-sm rounded-xl lg:p-12 bg-gray-200">
                        <div className="flex flex-col items-center w-full">
                            <h2 className="text-3xl font-semibold text-center">Write your review</h2>
                            <span className="text-center">How was your experience?</span>
                            <div className="flex gap-4 items-center py-6 space-y-3">
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="username" className="block ">Enter your name</label>
                                    <input type="text" name="name" id="username" placeholder="Enter your name" className="w-full px-4 py-3 rounded-md" defaultValue={user?.displayName} />
                                </div>
                                <div className=" rounded-full">
                                    {
                                        user?.photoURL ?
                                            <img className='' style={{ height: '50px', width: '50px', border: '1px solid white', borderRadius: '50%' }} src={user.photoURL} alt="" /> :
                                            <div>
                                                <FaUser className='text-2xl'></FaUser>
                                            </div>
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col w-full">
                                <textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
                                <button type="button" className="py-4 my-8 w-1/2 mx-auto  btn font-semibold border rounded bg-red-700 border-red-700 text-gray-100">Leave feedback</button>
                            </div>
                        </div>
                    </div>
                        : <div className='text-center text-xl mt-10 mx-auto p-5 w-2/5 rounded-md bg-red-300'>
                            Please <Link to='/login' className='font-semibold underline'>login</Link> to write a review
                        </div>
                }

            </div>

        </div>
    );
};

export default SingleFoodCard;