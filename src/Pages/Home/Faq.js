import React from 'react';
import faq from './Faq.css';

const Faq = () => {
    return (
        <div className='mt-24'>
            <div div className='text-center mb-16' >
                <h3 className='text-accent text-3xl font-bold uppercase mb-2'>Query</h3>
                <p className='font-semibold'>Professionally transition focused e-commerce whereas open-source niche markets. <br /> Proactively mesh sustainable internal or "organic" sources.</p>
            </div >
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-center px-24'>
                <div>
                    <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-2">
                        <div class="collapse-title text-xl font-medium">
                            Focus me to see content
                        </div>
                        <div class="collapse-content">
                            <p>tabindex="0" attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-2">
                        <div class="collapse-title text-xl font-medium">
                            Focus me to see content
                        </div>
                        <div class="collapse-content">
                            <p>tabindex="0" attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-2">
                        <div class="collapse-title text-xl font-medium">
                            Focus me to see content
                        </div>
                        <div class="collapse-content">
                            <p>tabindex="0" attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-2">
                        <div class="collapse-title text-xl font-medium">
                            Focus me to see content
                        </div>
                        <div class="collapse-content">
                            <p>tabindex="0" attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                        <div class="collapse-title text-xl font-medium">
                            Focus me to see content
                        </div>
                        <div class="collapse-content">
                            <p>tabindex="0" attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                </div>
                <div className='px-16'>
                    <img className='faq-img' src="https://media.istockphoto.com/vectors/question-mark-icon-flat-vector-illustration-design-vector-id1162198273?k=20&m=1162198273&s=612x612&w=0&h=s_5DDSXgMDkGq0sVqYpgD2AL1CuB9oK5UtmvMq6XBo8=" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Faq;