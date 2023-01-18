import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddFood = () => {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const food = {
            title: e.target.name.value,
            image: e.target.image.value,
            price: parseInt(e.target.price.value),
            details: e.target.details.value
        };
        fetch("http://localhost:5000/foods", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(food)
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message);
                    navigate('/foods')
                } else {
                    toast.error(data.error);
                }
            })
            .catch(err => {
                toast.error(err.message);
            })
    }
    return (
        <div className="py-32 px-10 min-h-screen w-full">
            <div className="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center mb-5">
                        <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                            Food Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
                        />
                    </div>
                    <div className="flex items-center mb-5">
                        <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                            Image
                        </label>
                        <input
                            type="text"
                            name="image"
                            placeholder="url"
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
                        />
                    </div>
                    <div className="flex items-center mb-5">
                        <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                            Price
                        </label>
                        <input
                            type="text"
                            name="price"
                            placeholder="price"
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
                        />
                    </div>
                    <div className="flex items-center mb-5">
                        <label className="inline-block w-40 mr-6 text-right font-bold text-gray-600">
                            Food Description
                        </label>
                        <textarea
                            type="text"
                            name="details"
                            placeholder="Food Short Description"
                            className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
                        />
                    </div>
                    <div className="text-right">
                        <button className="btn px-10 font-semibold border rounded bg-red-700 border-red-700 text-gray-100">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddFood;