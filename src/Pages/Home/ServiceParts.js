import React, { useEffect, useState } from 'react';
import ServicePart from './ServicePart';

const ServiceParts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('serviceparts.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setParts(data);
            });
    }, [])
    return (
        <div >
            <div className='text-center mb-16 mt-24'>
                <h3 className='text-accent text-3xl font-bold uppercase mb-2.5'>Our Services parts</h3>
                <h2 className='text-xl font-bold '>Services parts we provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto'>
                {
                    parts.map(part => <ServicePart
                        key={part.id}
                        part={part}
                    ></ServicePart>)
                }
            </div>
        </div>
    );
};

export default ServiceParts;