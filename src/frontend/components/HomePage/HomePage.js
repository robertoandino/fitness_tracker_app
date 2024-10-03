import React from "react";
import './Home.css';

const HomePage = () => {
    return(
        <main className="home-page">
            <section className="intro">
                <h2>Welcome to Fitness Tracker</h2>
                <p>Track your workouts and monitor your progress easily.
                    Stay on top of your fitness journey.
                </p>
                <div className="home-page-buttons">
                    <button className="home-page-button">Log Workout</button>
                    <button className="home-page-button">View Progress</button>
                </div>
            </section>
            
            <section className="recent-workouts">
                <h3>Your Recent Workouts</h3>
                <p>No workouts logged yet. Start tracking your progress today!</p>
            </section>
        </main>
    );
};

export default HomePage;

