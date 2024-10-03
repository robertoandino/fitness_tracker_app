import React, { useState } from "react";
import './Workouts.css'

const LogWorkout = () => {

    const [workoutData, setWorkoutData] = useState({
        type: '',
        duration: '',
        date: '',
        notes: '', 
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setWorkoutData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Workout Data: ', workoutData);

        setWorkoutData({
            type: '',
            duration: '',
            date: '',
            notes: '',
        });
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
                    <label htmlFor="notes">Notes:</label>
                    <textarea
                        id="notes"
                        name="notes"
                        value={workoutData.notes}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Log Workout</button>
            </form>
        </div>
    );
};

export default LogWorkout;
