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

    const handleReview = (e) => {
        e.preventDefault();
        const customerReview = {
            foodId: id,
            name: e.target.name.value,
            review: e.target.review.value,
            email: user?.email,
        }
        fetch("http://localhost:5000/addReview", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(customerReview)
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message)
                } else {
                    toast.error(data.error);
                }
            })
            .catch(err => {
                toast.error(err.message);
            })
    }

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
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <div>
                            <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                        </div>
                        <div>
                            <h4 className="font-bold">Leroy Jenkins</h4>
                            <span className="text-xs dark:text-gray-400">2 days ago</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 dark:text-yellow-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                        </svg>
                        <span className="text-xl font-bold">4.5</span>
                    </div>
                </div>
                <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                    <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                    <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                </div>
            </div>
            <div>

                {
                    user ?
                        <div className="flex flex-col w-1/2 mx-auto p-8 shadow-sm rounded-xl lg:p-12 bg-gray-200">
                            <form onSubmit={handleReview} className="flex flex-col items-center w-full">
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
                                    <textarea name='review' rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
                                    <button name='submit' className="py-4 my-8 w-1/2 mx-auto  btn font-semibold border rounded bg-red-700 border-red-700 text-gray-100">Leave feedback</button>
                                </div>
                            </form>
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