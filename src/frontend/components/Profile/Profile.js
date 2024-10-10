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

            const token = localStorage.getItem('authToken');
            
            if(token){
                try{
                    const res = await axios.get('http://localhost:5000/api/users/1/profile', {
                        headers: {
                            Authorization: 'Bearer ${token}',
                        },
                    });
                    setProfileData(res.data);       
                } catch (err) {
                    console.error('Error fetching profile: ', err);
                }
            }
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

    if (!profileData) {
        return <p>Loading profile...</p>
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
