import React, { useState } from "react";
import './Profile.css';

const Profile = () => {

    const [profileData, setProfileData] = useState({
        name: 'John Smith',
        email: 'john@example.com',
        goal: 'Lose 10 pounds in 3 months',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //add api call to save the updated profile data
        console.log('Profile Data Update:', profileData);
    }

    return( 
        <div className="profile">
            <h2>Your Profile</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={profileData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={profileData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="goal">Fitness Goal:</label>
                    <textarea
                        id='goal'
                        name='goal'
                        value={profileData.goal}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default Profile;
