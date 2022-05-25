import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ServiceParts from './ServiceParts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceParts></ServiceParts>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;