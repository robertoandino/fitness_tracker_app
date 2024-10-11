const knex = require('../db');

exports.getAllWorkouts = async (req, res) => {

    const userId = req.params.id;
    
    try {
        const workouts = await knex('workouts').where({ user_id: userId });
        res.json(workouts);
    } catch (err) {
        console.error('Error fetching workouts: ', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.addWorkout = async (req, res) => {
    const { date, type, duration, calories } = req.body;
    const userId = req.user.id;

    try{
        const newWorkout = await knex('workouts').insert({ date, type, duration, calories, user_id: userId });
        res.status(201).json(newWorkout);
    }catch(err){
        res.status(500).json({ message: 'Error adding workout', err });
    }

};

