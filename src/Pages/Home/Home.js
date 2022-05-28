import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Faq from './Faq';
import MyReview from './MyReview';
import PromoteBest from './PromoteBest';
import ServiceParts from './ServiceParts';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceParts></ServiceParts>
            <BusinessSummary></BusinessSummary>
            <Summary></Summary>
            <PromoteBest></PromoteBest>
            <MyReview></MyReview>
            <Faq></Faq>
        </div>
    );
};

export default Home;