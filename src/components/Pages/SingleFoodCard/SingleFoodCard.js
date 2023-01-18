import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

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
        <div></div>
    );
};

export default SingleFoodCard;