import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const AllFoodDetails = () => {
    const [allFoods, setAllFoods] = useState([])
    useEffect(() => {
        fetch("https://server-site-murex.vercel.app/foods")
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setAllFoods(data.data)
                }
                else {
                    toast.error(data.error)
                }
            })
            .catch(error => toast.error(error.message))
    }, [])
    return (
        <div>
            <div className='grid grid-cols-2 gap-8 mt-10'>
                {
                    allFoods.map(food => {
                        const { _id, title, image, price, details } = food;
                        // console.log(food);
                        return (
                            <div key={_id} food={food} className="flex flex-col p-6 w-3/4 space-y-6 overflow-hidden rounded-lg shadow-md  bg-gray-100 text-black-100 mx-auto" >
                                <div>
                                    <img src={image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96" />
                                    <h2 className="mb-1 text-xl font-semibold">{title}</h2>
                                    <p className="text-sm dark:text-gray-400">{details.slice(0, 100) + '...'} see more</p>
                                </div>
                                <div className="flex flex-wrap justify-between">
                                    <div className="flex space-x-2 text-sm dark:text-gray-400">
                                        <button type="button" className="flex items-center p-1 space-x-1.5">

                                            <span>Price : ${price}</span>
                                        </button>
                                    </div>
                                    <div className="space-x-2">
                                        <Link to={`/food/${_id}`}><button aria-label="Share this post" type="button" className="btn p-2 text-center">
                                            See Details
                                        </button></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    );
};

export default AllFoodDetails;