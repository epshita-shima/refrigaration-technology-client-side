import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const DashboardReview = () => {

    const [userReview, setUSerReview] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch('http://localhost:5000/review')
                .then(res => res.json())
                .then(data => setUSerReview(data));
        }
    }, [user])
    return (
        <div>
            <h2>This is review: {userReview.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Rating</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userReview.map((userReview, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{userReview.reviwerName}</td>
                                <td>{userReview.reviewer}</td>
                                <td>{userReview.rating}</td>
                                <td>{userReview.reviewDescription
                                }</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardReview;