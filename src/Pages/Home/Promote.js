import React from 'react';

const Promote = ({ promote }) => {
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure><img className='w-24 h-24 bg-primary rounded-full' src={promote.img} alt="review" /></figure>
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">{promote.name}</h2>
                    <p>{promote.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Promote;