import React, { useEffect, useState } from "react";
import './Profile.css';
import axios from 'axios';

const Profile = () => {

    const [profileData, setProfileData] = useState({
        name: '',
        email: '',
        goal: '',
    })

    useEffect(() => {
        
        const fetchProfileData = async () => {
            const res = await axios.get('http://localhost:5000/api/users/1/profile');
            setProfileData(res.data);
        };

        fetchProfileData();

    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.put('http://localhost:5000/api/users/1/profile', profileData);
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
