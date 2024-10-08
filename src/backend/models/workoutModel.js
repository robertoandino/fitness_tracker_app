const db = require('../db/knex');

const getAllWorkouts = async () => {
    return await db('workouts').select('*');
};

const addWorkout = async (workout) => {
    const [newWorkout] = await db('workouts').insert(workout).returning('*');
    return newWorkout;
};

module.exports = {
    getAllWorkouts,
    addWorkout,
};