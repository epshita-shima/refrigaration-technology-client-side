import React from 'react';

const ServicePart = ({ part }) => {
    const { name, image, description, orderquantity, availablequantity } = part;
    return (
        <div className='border rounded-lg py-4 px-10'>
            <img className='h-48 w-72 mb-4' src={image} alt="" />
            <h2 className='text-accent text-xl font-bold mb-2'>{name}</h2>
            <p className='mb-2'><strong>Minimum order quantity:</strong> {orderquantity}</p>
            <p className='mb-2'><strong>Available quantity: </strong>{availablequantity}</p>
            <p className='mb-2'><strong>Product description:</strong> {description}</p>
            <div class="card-actions justify-end">
                <button class="btn">Buy Now</button>
            </div>
        </div>
    );
};

export default ServicePart;