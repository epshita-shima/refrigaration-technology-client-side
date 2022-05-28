import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyReview = () => {
    const [userReview, setUSerReview] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const url = 'https://infinite-escarpment-16952.herokuapp.com/review';
        fetch(url)
            .then(res => res.json())
            .then(data => setUSerReview(data));
    }, [])

    const handleReview = event => {
        event.preventDefault();
        const reviewName = event.target.name.value;
        console.log(reviewName);
        const rating = event.target.num.value;
        console.log(rating);
        const review = event.target.msg.value;
        console.log(review);

        const reviews = {
            reviewer: user.email,
            reviwerName: user.displayName,
            rating: event.target.num.value,
            reviewDescription: event.target.msg.value,
        }
        fetch('https://infinite-escarpment-16952.herokuapp.com/reviews', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(reviews),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });

    }
    return (
        <div className='lg:max-w-7xl mx-auto bg-slate-100'>
            <div div className='text-center pt-24' >
                <h3 className='text-accent text-3xl font-bold uppercase mb-2'>Review</h3>
                <p className='font-semibold'>Professionally transition focused e-commerce whereas open-source niche markets. <br /> Proactively mesh sustainable internal or "organic" sources.</p>
            </div >
            <div className='flex justify-center items-center p-10'>
                <form onSubmit={handleReview}>
                    <input type="text" name='name' value={user?.displayName} class="input w-full max-w-xs mb-2" />
                    <br />
                    <input type="number" name='num' class="input w-full max-w-xs mb-2" />
                    <br />
                    <textarea name='msg' class="textarea w-full max-w-xs"></textarea>
                    <input type="submit" value="Submit" className="btn mt-5 btn-accent input-bordered w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default MyReview;