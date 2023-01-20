import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [myReview, setMyReview] = useState([])
    useEffect(() => {
        fetch(`https://server-site-murex.vercel.app/myReviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.data)
                setMyReview(data.data)
            })
            .catch(error => {
                toast.error(error.message)
                console.log(error);
            })
    }, [])
    return (
        <div>
            {
                myReview.length ?
                    <>
                        <div>{
                            myReview.map(myReview => {
                                return (
                                    <div key={myReview._id} className="container flex shadow-lg flex-col w-full max-w-lg p-6 m-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                                        <div className="flex justify-between p-4">
                                            <div className="flex space-x-4">
                                                <div>
                                                    <img src={myReview?.image} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold">{myReview?.name}</h4>
                                                    <h4 className="font-bold">{myReview?.email}</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                                            <p>{myReview?.review}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }</div>
                    </>
                    :
                    <>
                        <div className='text-red-400 font-semibold text-center text-5xl my-20'>You have no review found</div>

                    </>


            }

        </div >
    );
};

export default MyReview;