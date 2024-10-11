import React, { useState } from "react";
import './Workouts.css'
import axios from 'axios'

const LogWorkout = () => {

    const [workoutData, setWorkoutData] = useState({
        type: '',
        duration: '',
        date: '',
        calories: '', 
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setWorkoutData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('authToken');

        try{
            const res = await axios.post('http://localhost:5000/api/workouts', workoutData, {
                headers: {
                    Authorization: `${token}`,
                },
            })
            console.log('Workout logged: ', res.data);
            setWorkoutData({
                type: '',
                duration: '',
                date: '',
                calories: '',
            });
        } catch (err) {
            console.error('Error loggin workout', err);
        }
    };
    
    return(
        <div className="log-workout">
            <h2>Log Your Workout</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="type">Workout Type:</label>
                    <input
                        type="text"
                        id="type"
                        name="type"
                        value={workoutData.type}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="duration">Duration (in minutes):</label>
                    <input
                        type="number"
                        id="duration"
                        name="duration"
                        value={workoutData.duration}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={workoutData.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="calories">Calories:</label>
                    <input
                        type="number"
                        name="calories"
                        value={workoutData.calories}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Log Workout</button>
            </form>
        </div>
    );
};

export default LogWorkout;
