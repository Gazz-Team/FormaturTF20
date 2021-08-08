import React from 'react';
import CardProfile from './CardProfile.js'
import CardDesc from './CardDesc.js'
import './Profile.css'

const Profile = () => {
    return (
        <div className='profile'>
            <div className='ProfileCard'>
                <CardProfile />
            </div>
            <div className='ProfileCard'>
                <CardDesc />
            </div>
        </div>
    );
}

export default Profile;
