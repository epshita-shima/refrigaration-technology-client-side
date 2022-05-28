import React from 'react';
import MyProfile from './MyProfile';
import MyProfileValue from './MyProfileValue';

const DashBoardProfile = () => {
    return (
        <div className='flex justify-around items-center'>
            <MyProfileValue></MyProfileValue>
            <MyProfile></MyProfile>

        </div>
    );
};

export default DashBoardProfile;