import React, { useEffect, useState } from "react";
import axios from 'axios';

const Progress = () => {

    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
    
        const fetchWorkouts = async () => {
            try{
                const res = await axios.get('http://localhost:5000/api/workouts');
                setWorkouts(res.data);
            } catch (err){
                console.error('Error fetching workouts: ', err);
            }
        };
        
        fetchWorkouts();

    }, []);

    return(
        <div className="progress">
            <h2>Your Workout Progress</h2>
            {workouts.length === 0 ? (
                <p>No workouts logged yet.</p>
            ) : (
                <ul>
                    {workouts.map((workout) => (
                        <li key={workout.id}>
                            <strong>Type:</strong> {workout.type}, 
                            <strong> Duration:</strong> {workout.duration} minutes,
                            <strong> Date:</strong> {workout.date}, 
                            <strong> Calories:</strong> {workout.calories}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Progress;
