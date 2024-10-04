import React, { useEffect, useState } from "react";


const Progress = () => {

    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        
        const fetchWorkouts = async () => {

            //Code api call later
            const mockData = [
                {id: 1, type: 'Running', duration: 30, date: '2024-10-04', notes: 'Felt great!'},
                {id: 2, type: 'Cycling', duration: 45, date: '2024-10-02', notes: 'Challenging ride'}
            ];
            setWorkouts(mockData);
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
                            <strong> Notes:</strong> {workout.notes}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Progress;
