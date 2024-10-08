const workouts = [];

exports.getAllWorkouts = (req, res) => {
    res.status(200).json(workouts);
};

exports.addWorkout = (req, res) => {
    const { date, type, duration, calories } = req.body;

    const newWorkout = { date, type, duration, calories };
    workouts.push(newWorkout);

    res.status(201).json(newWorkout);
};

