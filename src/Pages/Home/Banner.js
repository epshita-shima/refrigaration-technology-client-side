import React from 'react';
import heroBg from '../../assets/image/heroBg.jpg'

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200" style={{
                background: `url(${heroBg})`,
                backgroundSize: 'cover',
            }}>
                <div class="hero-content text-center">
                    <div class=" max-w-lg">
                        <h1 class="text-4xl font-bold text-neutral">Cooling your Future with Technology</h1>
                        <p class="py-6 font-semibold text-neutral">The fundamental reason for having a refrigerator is to keep food cold. Cold temperatures help food stay fresh longer.</p>
                        <button class="btn btn-primary bg-gradient-to-r from-accent to-primary text-white font-bold">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;