import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='border m-10 p-10'>
            <h2 className='text-accent text-3xl font-bold'>Mst. Shima Khatun</h2>
            <p className='mt-2 text-xl'><strong>Email:</strong> epshitashima@gmail.com</p>
            <div className='mt-10 '>
                <h2 className='text-accent text-3xl font-bold mb-6'>Education</h2>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>Exam Title</th>
                                <th>Concentration / Major</th>
                                <th>Institute</th>
                                <th>Result</th>
                                <th>Passing Year</th>
                                <th>Board</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- row 1 --> */}
                            <tr>
                                <th>B.Sc</th>
                                <td>Computer Science and Engineering</td>
                                <td>Bangladesh University of Business and Technology</td>
                                <td>3.74 (out of 4)</td>
                                <td>2021</td>
                                <td>Dhaka</td>

                            </tr>
                            {/* <!-- row 2 --> */}
                            <tr>
                                <th>HSC</th>
                                <td>Science</td>
                                <td>Dr. Abdur Razzak Municipal College</td>
                                <td>4.25 (out of 5)</td>
                                <td>2016</td>
                                <td>Jessore</td>
                            </tr>
                            {/* <!-- row 3 --> */}
                            <tr>
                                <th>SSC</th>
                                <td>Science</td>
                                <td>Barabaldia School and College</td>
                                <td>4.25 (out of 5)</td>
                                <td>2013</td>
                                <td>Jessore</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='mt-10 '>
                <h2 className='text-accent text-3xl font-bold mb-6 border-b-2'>Skills</h2>
                <p><strong>HTML5, CSS3, Bootstrap, Tailwind css, React Bootstrap, daisyUI, JavaScript, ES6, React.js, react firebase hooks, Firebase, Node.js, Express.js, MongoDB, GitHub.</strong></p>
            </div>

            <div className='mt-10'>
                <h2 className='text-accent text-3xl font-bold mb-6 border-b-2'>Project live link</h2>

                <ul className='list-disc pl-16'>
                    <li className='text-xl'><a href=" https://fruits-warehouse-83911.web.app/">Fruits Warehouse</a></li>
                    <li className='text-xl'><a href="https://chase-dream.web.app/">Chase Dream</a></li>
                    <li className='text-xl'><a href="https://timely-mochi-4b92ca.netlify.app/">Book Store</a></li>
                </ul>
            </div>
        </div>
    );
};

export default MyPortfolio;