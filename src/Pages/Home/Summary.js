import React from 'react';

const Summary = ({ data }) => {
    return (
        <div className='mt-24'>
            <div div className='text-center mb-24' >
                <h3 className='text-accent text-3xl font-bold uppercase mb-2'>Summary</h3>
                <p className='font-semibold'>Professionally transition focused e-commerce whereas open-source niche markets. <br /> Proactively mesh sustainable internal or "organic" sources.</p>
            </div >
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:max-w-7xl mx-auto'>
                <div class="card w-96 bg-base-100 text-primary-content shadow-xl">
                    <div class="card-body text-center">
                        <a className='mx-auto' href=""><svg className='h-24' xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg></a>
                        <h2 class="text-3xl font-bold">50K+</h2>
                        <p className='font-bold'>Products Sels</p>

                    </div>
                </div>
                <div class="card w-96  bg-base-100 text-primary-content shadow-xl">
                    <div class="card-body text-center">
                        <a className='mx-auto' href=""><svg className='h-24' xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg></a>
                        <h2 class="text-3xl font-bold">30K+</h2>
                        <p className='font-bold'>Happy Client</p>

                    </div>
                </div>
                <div class="card w-96  bg-base-100 text-primary-content shadow-xl">
                    <div class="card-body text-center">
                        <a className='mx-auto' href=""><svg className='h-24' xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                        </svg></a>
                        <h2 class="text-3xl font-bold">70+</h2>
                        <p className='font-bold'>Countries</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;