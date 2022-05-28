import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServicePart = ({ part }) => {
    const { _id, name, image, description, orderquantity, availablequantity } = part;
    const navigate = useNavigate();

    const navigateToServicePartDetail = id => {
        navigate(`/purchase/${id}`);
    }

    return (
        <div className='border rounded-lg py-4 px-10'>
            <img className='h-48 w-72 mb-4' src={image} alt="" />
            <h2 className='text-accent text-xl font-bold mb-2'>{name}</h2>
            <p className='mb-2'><strong>Minimum order quantity:</strong> {orderquantity}</p>
            <p className='mb-2'><strong>Available quantity: </strong>{availablequantity}</p>
            <p className='mb-2'><strong>Product description:</strong> {description}</p>
            <div class="card-actions justify-center">
                <button onClick={() => navigateToServicePartDetail(_id)}
                    class="btn btn-primary bg-gradient-to-r from-accent to-primary text-white font-bold">Buy Now</button>
            </div>
        </div>
    );
};

export default ServicePart;