import React from 'react';

const ServicePart = ({ part }) => {
    const { name, image, description, orderquantity, availablequantity } = part;
    return (
        <div className='border rounded-lg py-4 px-10'>
            <img src={image} alt="" />
            <h2 className='text-accent text-xl font-bold mb-2'>{name}</h2>
            <p className='mb-2'><strong>Minimum order quantity:</strong> {orderquantity}</p>
            <p className='mb-2'><strong>Available quantity: </strong>{availablequantity}</p>
            <p className='mb-2'><strong>Product description:</strong> {description}</p>
        </div>
    );
};

export default ServicePart;