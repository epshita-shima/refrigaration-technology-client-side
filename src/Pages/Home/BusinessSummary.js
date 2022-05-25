import React from 'react';
import { CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Legend, Bar } from 'recharts';


const BusinessSummary = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='mb-16'>
            <div className='text-center mb-16 mt-24'>
                <h2 className='text-accent text-3xl font-bold uppercase mb-2'>Our Bussines summary</h2>
            </div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-10 mt-24 max-w-7xl mx-auto'>
                <div className='p-4'>
                    <BarChart width={550} height={500} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="revenue" fill="#8884d8" />
                        <Bar dataKey="investment" fill="#82ca9d" />
                    </BarChart>
                </div>
                <div className='p-12 lg:mt-24'>
                    <h2 className='text-accent text-3xl font-bold mb-2'>Tweenty years of experience</h2>
                    <p className='font-semibold text-justify'>Distributor of refrigeration components and parts. Products include valves, sight glasses, driers and suction filters, suction accumulators, line sets, acr and soft tube, copper fittings, and liquid receivers. Suitable for use in new components or as replacement. Also offers HVAC equipment parts. Serves markets such as supermarkets, restaurant and food service, processing and industrial, cold storage, wine cellars, medical, and convenience stores. Provides FOB shipping.</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;