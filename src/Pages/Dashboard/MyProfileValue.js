import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfileValue = () => {

    const [userProfile, setUserProfile] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const url = 'https://infinite-escarpment-16952.herokuapp.com/profile';
        fetch(url)
            .then(res => res.json())
            .then(data => setUserProfile(data));
    }, [])

    const handleProfileValue = event => {
        event.preventDefault();

        const education = event.target.edu.value;
        console.log(education);

        const address = event.target.address.value;
        console.log(address);

        const phone = event.target.num.value;
        console.log(phone);

        const profile = {
            email: user.email,
            userName: user.displayName,
            education: event.target.edu.value,
            address: event.target.address.value,
            phone: event.target.num.value,

        }
        fetch('https://infinite-escarpment-16952.herokuapp.com/profile', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(profile),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    }
    return (
        <div>
            <div className='lg:max-w-7xl mx-auto bg-slate-100'>
                <div div className='text-center pt-24' >
                    <h3 className='text-accent text-3xl font-bold uppercase mb-2'>Review</h3>
                    <p className='font-semibold'>Professionally transition focused e-commerce whereas open-source niche markets. <br /> Proactively mesh sustainable internal or "organic" sources.</p>
                </div >
                <div className='flex justify-center items-center p-10'>
                    <form onSubmit={handleProfileValue}>
                        <label class="input-group input-group-md mb-2">
                            <span>Name</span>
                            <input type="text" name='name' value={user.displayName} class="input input-bordered w-full max-w-xs" />
                        </label>
                        <label class="input-group input-group-md mb-2">
                            <span>Email</span>
                            <input type="text" name='email' value={user.email} class="input input-bordered w-full max-w-xs" />
                        </label>
                        <label class="input-group input-group-md mb-2">
                            <span>Education</span>
                            <input type="text" name='edu' class="input input-bordered w-full max-w-xs" />
                        </label>
                        <label class="input-group input-group-md mb-2">
                            <span>Address</span>
                            <input type="text" name='address' class="input input-bordered w-full max-w-xs" />
                        </label>
                        <label class="input-group input-group-md mb-2 ">
                            <span>Phone</span>
                            <input type="number" name='num' class="input input-bordered w-full max-w-xs" />
                        </label>
                        <input type="submit" value="Submit" className="btn mt-5 btn-accent input-bordered w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfileValue;