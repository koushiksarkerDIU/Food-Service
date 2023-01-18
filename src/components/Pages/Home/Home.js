import React from 'react';
import './Home.css'
import AllFoodDetails from '../AllFoodDetails/AllFoodDetails';

const Home = () => {
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
            <div>
                <AllFoodDetails />
            </div>
        </div>
    );
};

export default Home;