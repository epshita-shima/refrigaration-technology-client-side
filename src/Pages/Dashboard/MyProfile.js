import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [profile, setProfile] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/profile?email=${user.email}`)
                .then(res => res.json())
                .then(data => setProfile(data));
        }
    }, [user])
    return (
        <div>
            <h2>User Profile: {profile.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Education</th>
                            <th>Address</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            profile.map((profile, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{profile.userName}</td>
                                <td>{profile.email}</td>
                                <td>{profile.education}</td>
                                <td>{profile.phone}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProfile;