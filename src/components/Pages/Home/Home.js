import React, { useEffect, useState } from 'react';
import './Home.css'
import AllFoodDetails from '../AllFoodDetails/AllFoodDetails';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {
    const [allFoods, setAllFoods] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000")
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
            <div className="carousel w-4/5 mx-auto my-6">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/t8Wq7M7/pexels-nicolas-postiglioni-991967.jpg" className="w-full" alt='food img' />
                    <div className="btn-bg absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                        <a href="#slide4" className=" btn btn-circle">❮</a>
                        <a href="#slide2" className=" btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/bvQY5HV/pexels-mithul-varshan-8408989.jpg" className="w-full" alt='food img' />
                    <div className="btn-bg absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/t8Wq7M7/pexels-nicolas-postiglioni-991967.jpg" className="w-full" alt='food img' />
                    <div className="btn-bg absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/SKQ3hLS/pexels-chan-walrus-958545.jpg" className="w-full" alt='food img' />
                    <div className="btn-bg absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            {/* limit the homepage food cart */}
            <div>
                <div className='grid grid-cols-2 gap-8 mt-10'>
                    {
                        allFoods.map(food => {
                            const { _id, title, image, price, details } = food;
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
            </div>
            <div className='flex justify-center my-10'>
                <Link to='/foods'><button type="button" className="px-8 py-3 font-semibold border rounded bg-red-600 border-red-700 text-gray-100">See all</button></Link>
            </div>
        </div>
    );
};

export default Home;