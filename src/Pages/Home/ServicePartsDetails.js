import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServicePartsDetails = () => {
    const { serviceId } = useParams();
    return (
        <div className='mx-auto text-center mt-24'>
            <h2 className='text-2xl text-primary mb-4'>Service part id:{serviceId}</h2>
            <Link
                to='/purchase'>
                <button className='btn btn-accent'>Purchase now</button>
            </Link>
        </div>
    );
};

export default ServicePartsDetails;