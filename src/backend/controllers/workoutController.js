const knex = require('../db');

exports.getAllWorkouts = async (req, res) => {
    try{
        const workouts = await knex('workouts');
        res.status(200).json(workouts);
    }catch(err){
        res.status(500).json({ message: 'Error retrieving workouts', err });
    }
};

exports.addWorkout = async (req, res) => {
    const { date, type, duration, calories } = req.body;

    try{
        const newWorkout = await knex('workouts').insert({ date, type, duration, calories });
        res.status(201).json(newWorkout);
    }catch(err){
        res.status(500).json({ message: 'Error adding workout', err });
    }

};

