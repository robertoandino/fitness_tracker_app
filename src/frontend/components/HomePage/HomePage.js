import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
//import axios from 'axios';
import './Home.css';

const HomePage = () => {

    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
    
        //Uncomment this once backend is running
        //To retrieve data from database 
        /* 
        const userId = localStorage.getItem('userId');
        const fetchWorkouts = async () => {
            try{
                const res = await axios.get(`http://localhost:5000/api/workouts/${userId}`);
                setWorkouts(res.data);
            } catch (err){
                console.error('Error fetching workouts: ', err);
            }
        };
        
        fetchWorkouts();
        */

        //Comment this code once backend is running
        const storedWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];
        setWorkouts(storedWorkouts.slice(-3));

    }, []);

    const navigate = useNavigate();

    const goToLogWorkout = () => {
        navigate('/log-workout')
    }

    const goToProgress = () => {
        navigate('/progress')
    }

    return(
        <main className="home-page">
            <section className="intro">
                <h2>Welcome to Fitness Tracker</h2>
                <p>Track your workouts and monitor your progress easily.
                    Stay on top of your fitness journey.
                </p>
                <div className="home-page-buttons">
                    <button onClick={goToLogWorkout} className="home-page-button">Log Workout</button>
                    <button onClick={goToProgress} className="home-page-button">View Progress</button>
                </div>
            </section>
            
            <section className="recent-workouts">
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
            </section>
        </main>
    );
};

export default HomePage;

