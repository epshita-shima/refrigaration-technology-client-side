import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Faq from './Faq';
import PromoteBest from './PromoteBest';
import ServiceParts from './ServiceParts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceParts></ServiceParts>
            <BusinessSummary></BusinessSummary>
            <PromoteBest></PromoteBest>
            <Faq></Faq>
        </div>
    );
};

export default Home;