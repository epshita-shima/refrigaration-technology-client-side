import React from 'react';
import calculator from '../../assets/image/calculator.png';
import Promote from './Promote';

const PromoteBest = () => {
    const promotes = [
        {
            _id: 1,
            name: 'Estimates',
            img: calculator,
            description: 'Assertively customize client-focused niche markets whereas reliable e-commerce. Professionally transform corporate supply chains before robust portals. Monotonectally plagiarize functionalized e-business'
        },
        {
            _id: 2,
            name: 'Estimates',
            img: calculator,
            description: 'Assertively customize client-focused niche markets whereas reliable e-commerce. Professionally transform corporate supply chains before robust portals. Monotonectally plagiarize functionalized e-business'
        },
        {
            _id: 3,
            name: 'Estimates',
            img: calculator,
            description: 'Assertively customize client-focused niche markets whereas reliable e-commerce. Professionally transform corporate supply chains before robust portals. Monotonectally plagiarize functionalized e-business'
        }
    ]
    return (
        <div className='my-24'>
            <div div className='text-center mb-24' >
                <h3 className='text-accent text-3xl font-bold uppercase mb-2'>Why we are best</h3>
                <p className='font-semibold'>Professionally transition focused e-commerce whereas open-source niche markets. <br /> Proactively mesh sustainable internal or "organic" sources.</p>
            </div >

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    promotes.map(promote => <Promote
                        key={promote._id}
                        promote={promote}
                    ></Promote>)
                }
            </div>
        </div>
    );
};

export default PromoteBest;