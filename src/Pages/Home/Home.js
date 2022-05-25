import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import PromoteBest from './PromoteBest';
import ServiceParts from './ServiceParts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceParts></ServiceParts>
            <BusinessSummary></BusinessSummary>
            <PromoteBest></PromoteBest>
        </div>
    );
};

export default Home;